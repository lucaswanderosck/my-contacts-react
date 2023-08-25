import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContactClass from "../../models/ContactClass";

type ContactState = {
  contactItems: ContactClass[];
};

const initialState: ContactState = {
  contactItems: [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      phone: "(22) 98145-8946",
    },
    {
      id: 2,
      name: "Luíz",
      email: "luiz@gmail.com",
      phone: "(22) 98145-8946",
    },
    {
      id: 3,
      name: "lucas",
      email: "lucas@gmail.com",
      phone: "(22) 98145-8946",
    },
  ],
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
  },
});

export const { removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
