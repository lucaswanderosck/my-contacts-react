import { BsSearch } from "react-icons/bs";
import { Container } from "./styles";

const Input = ({ ...rest }) => {
  return (
    <Container>
      <BsSearch size={20} />
      <input type="text" {...rest} />
    </Container>
  );
};

export default Input;
