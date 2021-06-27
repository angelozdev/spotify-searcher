import { Button as ButtonContainer, ButtonText } from "./button.styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "normal";
}

function Button({ size = "normal", children, ...rest }: Props) {
  return (
    <ButtonContainer theme={{ size }} {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
