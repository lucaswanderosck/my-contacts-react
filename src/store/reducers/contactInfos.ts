import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContactClass from "../../models/ContactClass";

type ContactState = {
  itens: ContactClass[];
};

const initialState: ContactState = {
  itens: [
    new ContactClass("João", "João@gmail.com", "(22) 98163-5832", 1),
    new ContactClass("Maria", "maria@gmail.com", "(22) 98174-8463", 2),
  ],
};

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    removeContact: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      );
    },

    editContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.itens.findIndex(
        (t) => t.id === action.payload.id
      );
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload;
      }
    },
  },
});

export const { removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
