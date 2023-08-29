import { useEffect, useState } from "react";
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
  email: originEmail,
  name: originName,
  phone: OriginPhone,
  id,
}: Props) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (originEmail.length > 0) {
      setEmail(originEmail);
    }
  }, [originEmail]);

  useEffect(() => {
    if (originName.length > 0) {
      setName(originName);
    }
  }, [originName]);

  useEffect(() => {
    if (OriginPhone.length > 0) {
      setPhone(OriginPhone);
    }
  }, [OriginPhone]);

  const cancelEdit = () => {
    setIsEditing(false);
    setName(originName);
    setPhone(OriginPhone);
    setEmail(originEmail);
  };

  return (
    <S.Container>
      <S.ContactInfos>
        <LetterProfile letter={name.toUpperCase()} />
        <div>
          <S.InputInfos
            type="text"
            value={name}
            disabled={!isEditing}
            onChange={({ target }) => setName(target.value)}
          />
          <S.InputInfos
            type="text"
            value={phone}
            disabled={!isEditing}
            onChange={({ target }) => setPhone(target.value)}
          />
          <S.InputInfos
            type="text"
            value={email}
            disabled={!isEditing}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
      </S.ContactInfos>

      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(editContact({ name, phone, email, id }));
                setIsEditing(false);
              }}
            >
              <IoMdCheckmarkCircleOutline size={28} />
            </S.SaveButton>
            <S.RemoveButton onClick={cancelEdit}>
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
