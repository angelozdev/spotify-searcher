import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

function Home() {
  const { search } = useLocation();
  const handleLoginClick = () => {
    const { VITE_SPOTIFY_CLIENT_ID, VITE_SPOTIFY_REDIRECT_URI } = import.meta
      .env;
    const SPOTIFY_URL = `https://accounts.spotify.com/authorize?client_id=${VITE_SPOTIFY_CLIENT_ID}&redirect_uri=${VITE_SPOTIFY_REDIRECT_URI}&response_type=code`;

    window.location.replace(SPOTIFY_URL);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const spotifyCode = urlParams.get("code");
  }, [search]);

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
