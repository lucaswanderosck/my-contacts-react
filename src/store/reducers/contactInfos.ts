import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContactClass from "../../models/ContactClass";

type ContactState = {
  contactItems: ContactClass[];
};

const initialState: ContactState = {
  contactItems: [],
};

const contactsSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    removeContact: (state, action: PayloadAction<number>) => {
      state.contactItems = state.contactItems.filter(
        (contact) => contact.id !== action.payload
      );
    },

    editContact: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.contactItems.findIndex(
        (c) => c.id === action.payload.id
      );
      if (contactIndex >= 0) {
        state.contactItems[contactIndex] = action.payload;
      }
    },

    addContact: (state, action: PayloadAction<Omit<ContactClass, "id">>) => {
      const contactExists = state.contactItems.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (!contactExists) {
        const lastContact = state.contactItems[state.contactItems.length - 1];
        const newContact = {
          id: lastContact ? lastContact.id + 1 : 1,
          ...action.payload,
        };
        state.contactItems.push(newContact);
      } else {
        alert("O contato já existe");
      }
    },
  },
});

export const { removeContact, editContact, addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
