import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactInfos";

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>;
export default store;