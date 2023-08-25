import { useState } from "react";
import { Provider } from "react-redux";
import AppHeader from "./containers/AppHeader";
import AppCardList from "./containers/AppCardList";
import store from "./store";
import ButtonNewContact from "./components/ButtonNewContact";
import NewContactModal from "./containers/NewContactModal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Provider store={store}>
      <AppHeader />
      <AppCardList />
      <ButtonNewContact openModal={handleOpenModal} />
      {modalIsOpen && <NewContactModal onClose={handleCloseModal} />}
    </Provider>
  );
};

export default App;
