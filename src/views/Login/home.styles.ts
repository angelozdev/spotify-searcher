import styled from "styled-components/macro";

export const Container = styled.section``;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  max-height: 900px;
  align-items: center;
  gap: 2rem;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
`;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ImageContainer = styled.div`
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Figure = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
`;
