import { IoMdAddCircleOutline } from "react-icons/io";
import { Container } from "./styles";

type Props = {
  openModal: () => void;
};

const ButtonNewContact = ({ openModal }: Props) => {
  return (
    <Container type="button" onClick={openModal}>
      <IoMdAddCircleOutline size={60} />
    </Container>
  );
};

export default ButtonNewContact;
