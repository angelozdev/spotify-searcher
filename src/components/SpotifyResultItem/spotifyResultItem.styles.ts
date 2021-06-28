import styled from "styled-components/macro";

export const Details = styled.div`
  padding: 1rem;
  background-color: white;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: ease opacity 300ms;
`;

export const Container = styled.li`
  flex-basis: 250px;
  flex-grow: 1;
  max-width: 300px;
  position: relative;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.1rem rgba(0, 0, 0, 0.2);

  &:hover ${Details} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Link = styled.a`
  display: inline-block;
  height: 100%;
  text-decoration: none;
  color: white;
`;

export const Strong = styled.strong``;

export const Text = styled.p`
  margin: 0.5rem 0;
`;
