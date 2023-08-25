import { useDispatch, useSelector } from "react-redux";
import CardContact from "../../components/CardContact";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { LuClipboardList } from "react-icons/lu";
import { setSearchFilter } from "../../store/reducers/filterContatcs";
import Input from "../../components/Input";

const AppCardList = () => {
  const { contactItems } = useSelector((state: RootReducer) => state.contacts);
  const { searchFilter } = useSelector((state: RootReducer) => state.filter);
  const dispacth = useDispatch();
  const contactCounter = contactItems.length;

  const filterContactsByName = () => {
    return contactItems.filter(
      (contact) =>
        contact.name.toLowerCase().search(searchFilter.toLowerCase()) >= 0
    );
  };

  return (
    <S.Container>
      <Input
        placeholder="Pesquisar pelo nome"
        value={searchFilter}
        onChange={(event: { target: { value: string } }) =>
          dispacth(setSearchFilter(event.target.value))
        }
      />

      <h4>
        Contatos criados <span>{contactCounter}</span>
      </h4>

      {contactCounter === 0 ? (
        <S.withoutContacts>
          <LuClipboardList size={56} />
          <p>Você ainda não tem contatos cadastrados</p>
          <p>Adicione contatos para manter sua lista organizada</p>
        </S.withoutContacts>
      ) : (
        <>
          {filterContactsByName().map((c) => (
            <li key={c.id}>
              <CardContact
                email={c.email}
                name={c.name}
                phone={c.phone}
                id={c.id}
              />
            </li>
          ))}
        </>
      )}
    </S.Container>
  );
};

export default AppCardList;
