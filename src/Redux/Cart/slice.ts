import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type CartSlice = {
  list: Product[];
  filter: string;
};

const initialState: CartSlice = {
  list: [],
  filter: "all",
};

const slice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      // const index = state.list.findIndex((i) => i.id === action.payload);
      // if (index) {
      //   state.list.splice(index, 1);
      // }
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartReducer = slice.reducer;
export const { addToCart, removeItem } = slice.actions;
