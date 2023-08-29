import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../store/reducers/contactInfos";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, TitleForm } from "./styles";

import { MdOutlineCancel } from "react-icons/md";
import { MdEmail, MdPhone, MdPerson } from "react-icons/md";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const NewContactModal = ({ onClose, isOpen }: Props) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isVisible && nameRef.current) {
      nameRef.current.focus();
    }
  }, [isVisible]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameValid = /^[a-zA-Z ]+$/.test(name);

    if (!isNameValid) return alert("Nome inválido, digite apenas letras");

    dispatch(
      addContact({
        name,
        phone,
        email,
      })
    );

    setName("");
    setPhone("");
    setEmail("");
    onClose();
  };

  return (
    isVisible && (
      <Container>
        <form onSubmit={handleSubmit}>
          <TitleForm>
            <h2>Adicionar contato</h2>
            <MdOutlineCancel size={28} onClick={onClose} />
          </TitleForm>
          <Input
            Icon={MdPerson}
            type="text"
            value={name}
            placeholder="Nome"
            required
            ref={nameRef}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            Icon={MdPhone}
            type="number"
            value={phone}
            placeholder="Telefone"
            required
            maxLength={15}
            onChange={({ target }) => setPhone(target.value)}
          />
          <Input
            Icon={MdEmail}
            type="email"
            value={email}
            placeholder="Email"
            required
            onChange={({ target }) => setEmail(target.value)}
          />
          <Button title="Salvar" />
        </form>
      </Container>
    )
  );
};

export default NewContactModal;
