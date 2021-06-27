import styled from "styled-components/macro";

const setSizeButton = (size: string) => {
  switch (size) {
    case "normal":
      return "1rem";
    case "small":
      return "0.5rem";
    default:
      return "1rem";
  }
};

export const Button = styled.button`
  padding: ${({ theme }) => setSizeButton(theme.size)};
  border-radius: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #1ed760;
  transition: 300ms all ease;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const ButtonText = styled.span`
  padding: 0 2rem;
  text-transform: uppercase;
  color: white;
`;
