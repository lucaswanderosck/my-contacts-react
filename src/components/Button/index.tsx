import { Container } from "./styles";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <Container type="submit">
      {title}
    </Container>
  );
};

export default Button;
