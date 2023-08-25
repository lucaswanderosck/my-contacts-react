import { MdOutlineCancel } from "react-icons/md";
import Input from "../../components/Input";
import { Container, TitleForm } from "./styles";
import Button from "../../components/Button";
import { MdEmail, MdPhone, MdPerson } from "react-icons/md";

type Props = {
  onClose: () => void;
};

const NewContactModal = ({ onClose }: Props) => {
  return (
    <Container>
      <form action="">
        <TitleForm>
          <h2>Adicionar contato</h2>
          <MdOutlineCancel size={28} onClick={onClose} />
        </TitleForm>
        <Input Icon={MdPerson} type="text" placeholder="Nome" required />
        <Input Icon={MdPhone} type="number" placeholder="Telefone" required />
        <Input
          Icon={MdEmail}
          type="email"
          placeholder="Email"
          required
        />
        <Button title="Salvar" />
      </form>
    </Container>
  );
};

export default NewContactModal;
