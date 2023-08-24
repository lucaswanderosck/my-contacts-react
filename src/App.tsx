import { useState } from "react";
import { Provider } from "react-redux";
import AppHeader from "./containers/AppHeader";
import AppSearch from "./containers/AppSearch";
import CardList from "./containers/CardList";
import store from "./store";
import ButtonNewContact from "./components/ButtonNewContact";
import NewContactModal from "./containers/NewContactModal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  return (
    <Provider store={store}>
      <AppHeader />
      <AppSearch />
      <CardList />
      <ButtonNewContact openModal={handleOpenModal} />
      {modalIsOpen && <NewContactModal />}
    </Provider>
  );
};

export default App;
