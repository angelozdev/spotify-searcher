import { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Wrapper, Button } from "components";
import {
  Container,
  Content,
  Image,
  ImageContainer,
  Layout,
  Subtitle,
  Title,
  Figure,
} from "./login.styles";
import { EnvironmentVariables, Routes } from "consts";
import { getTokens } from "services/auth";
import { authAtom } from "recoilState/auth/atoms";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useRecoilState(authAtom);
  const { search } = useLocation();
  const history = useHistory();

  const handleLoginClick = useCallback(() => {
    const { REDIRECT_URI, CLIENT_ID } = EnvironmentVariables;
    const SPOTIFY_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.replace(SPOTIFY_URL);
  }, []);

  const authenticateUser = async (code: string) => {
    try {
      setIsLoading(true);
      let options = { code, refresh_token: "" };

      if (auth.refreshToken) {
        options = { ...options, refresh_token: auth.refreshToken };
      }

      const { accessToken, refreshToken } = await getTokens(options);
      setAuth((prev) => ({
        isAuth: true,
        accessToken,
        refreshToken: prev.refreshToken ?? refreshToken,
      }));

      refreshToken &&
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));

      history.replace(Routes.SEARCH);
    } catch (error) {
      setAuth((current) => ({ ...current, isAuth: false }));
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const setCode = (spotifyCode: string) => {
    if (spotifyCode) {
      return spotifyCode;
    } else if (auth.refreshToken) {
      return auth.refreshToken;
    }

    return null;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const spotifyCode = urlParams.get("code") || "";

    const code = setCode(spotifyCode);

    !code && setIsLoading(false);
    code && authenticateUser(code);
  }, [search]);

  useEffect(() => {
    console.log("RENDER HOME", { auth }, { isLoading });
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Wrapper>
        <Layout>
          <Content>
            <Title>Bienvenido de nuevo.</Title>
            <Subtitle>Identifícate para encontrar tu música favorita.</Subtitle>
            <Button onClick={handleLoginClick}>Iniciar sesión</Button>
          </Content>

          <ImageContainer>
            <Figure>
              <Image src="https://images.unsplash.com/photo-1567014033256-0cfcd4f84c15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
            </Figure>
          </ImageContainer>
        </Layout>
      </Wrapper>
    </Container>
  );
}

export default memo(Home);
