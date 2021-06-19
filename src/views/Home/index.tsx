import React from "react";

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
  return (
    <Container>
      <Wrapper>
        <Layout>
          <Content>
            <Title>Bienvenido de nuevo.</Title>
            <Subtitle>Identifícate para encontrar tu música favorita.</Subtitle>
            <Button>
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
