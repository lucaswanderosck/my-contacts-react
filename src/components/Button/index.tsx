import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <Container type="button">
      {title}
      <FiSearch />
    </Container>
  );
};

export default Button;
