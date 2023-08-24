import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import {
  IoMdRemoveCircleOutline,
  IoMdCheckmarkCircleOutline,
} from "react-icons/io";
import * as S from "./styles";
import ContactClass from "../../models/ContactClass";
import { removeContact, editContact } from "../../store/reducers/contactInfos";
import LetterProfile from "../LetterProfile";

type Props = ContactClass;

const CardContact = ({
  name: originName,
  email: originEmail,
  phone: originPhone,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(originName);
  const [email, setEmail] = useState(originEmail);
  const [phone, setPhone] = useState(originPhone);

  const cancelEditing = () => {
    setIsEditing(false);
    setName(originName);
    setEmail(originEmail);
    setPhone(originPhone);
  };

  const handleSave = () => {
    dispatch(editContact({ name, email, phone, id }));
    setIsEditing(false);
  };

  return (
    <S.Container>
      <S.ContactInfos>
        <LetterProfile letter={name}/>
        <div>
          <S.InputInfos
            type="text"
            value={name}
            disabled={!isEditing}
            onChange={(event) => setName(event.target.value)}
          />
          <S.InputInfos
            type="text"
            value={email}
            disabled={!isEditing}
            onChange={(event) => setEmail(event.target.value)}
          />
          <S.InputInfos
            type="text"
            value={phone}
            disabled={!isEditing}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </S.ContactInfos>

      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton onClick={handleSave}>
              <IoMdCheckmarkCircleOutline size={28} />
            </S.SaveButton>
            <S.RemoveButton onClick={cancelEditing}>
              <MdOutlineCancel size={28} />
            </S.RemoveButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setIsEditing(true)}>
              <BiEdit size={28} />
            </S.EditButton>
            <S.RemoveButton onClick={() => dispatch(removeContact(id))}>
              <IoMdRemoveCircleOutline size={28} />
            </S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Container>
  );
};

export default CardContact;
