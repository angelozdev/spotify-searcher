import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { Wrapper } from "components";
import {
  Button,
  ButtonText,
  Container,
  Content,
  Image,
  ImageContainer,
  Layout,
  Subtitle,
  Title,
  Figure,
} from "./home.styles";
import { EnvironmentVariables } from "consts";
import { getTokens } from "services/auth";
import { authAtom } from "recoilState/auth/atoms";

function Home() {
  const [auth, setAuth] = useRecoilState(authAtom);
  const { search } = useLocation();

  const handleLoginClick = () => {
    const { REDIRECT_URI, CLIENT_ID } = EnvironmentVariables;
    const SPOTIFY_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.replace(SPOTIFY_URL);
  };

  const authenticateUser = async (code: string) => {
    try {
      let options = {};

      if (auth.refreshToken) {
        options = { refresh_token: auth.refreshToken };
      } else {
        options = { code };
      }

      const { accessToken, refreshToken } = await getTokens(options);

      setAuth({
        isAuth: true,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      setAuth((current) => ({ ...current, isAuth: false }));
      console.error(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const spotifyCode = urlParams.get("code");

    spotifyCode && authenticateUser(spotifyCode);
  }, [search]);

  useEffect(() => {
    console.log({ auth });
  });

  return (
    <Container>
      <Wrapper>
        <Layout>
          <Content>
            <Title>Bienvenido de nuevo.</Title>
            <Subtitle>Identifícate para encontrar tu música favorita.</Subtitle>
            <Button onClick={handleLoginClick}>
              <ButtonText>Iniciar sesión</ButtonText>
            </Button>
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

export default Home;
