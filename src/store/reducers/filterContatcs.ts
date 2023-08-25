import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FilterState = {
  searchFilter: string;
};

const initialState: FilterState = {
  searchFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchFilter: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload;
    },
  },
});

export const { setSearchFilter } = filterSlice.actions;
export default filterSlice.reducer;
