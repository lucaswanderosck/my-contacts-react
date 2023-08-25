import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactInfos";
import filterContatcs from "./reducers/filterContatcs";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterContatcs,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store;
