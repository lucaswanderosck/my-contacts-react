import { Container } from "./styles";
import { FaRegAddressBook } from "react-icons/fa";

const AppHeader = () => {
  return (
    <Container>
      <FaRegAddressBook size={36} />
      <h1>Meus Contatos</h1>
    </Container>
  );
};

export default AppHeader;
