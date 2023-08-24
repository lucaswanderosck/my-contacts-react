import { useSelector } from "react-redux";
import CardContact from "../../components/CardContact";
import { Container } from "./styles";
import { RootReducer } from "../../store";

const CardList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts);
  return (
    <Container>
      {itens.map((c) => (
        <li key={c.name}>
          <CardContact
            email={c.email}
            name={c.name}
            phone={c.phone}
            id={c.id}
          />
        </li>
      ))}
    </Container>
  );
};

export default CardList;
