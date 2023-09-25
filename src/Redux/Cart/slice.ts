import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";
import { toast } from "react-toastify";

type CartSlice = {
  list: Product[];
  filter: string;
  totalPrice: number;
};

const initialState: CartSlice = {
  list: [],
  filter: "all",
  totalPrice: 0,
};
const calcSum = (state: CartSlice) =>
  (state.totalPrice = state.list.reduce((acc, item) => acc + item.price, 0));

const slice = createSlice({
  name: "productsCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.list.push(action.payload);
      state.totalPrice = calcSum(state);
    },
    removeItem: (state, action) => {
      // const index = state.list.findIndex((i) => i.id === action.payload);
      // if (index) {
      //   state.list.splice(index, 1);
      // }

      state.list = state.list.filter((item) => item.id !== action.payload);
      state.totalPrice = calcSum(state);
    },
  },
});

export const cartReducer = slice.reducer;
export const { addToCart, removeItem } = slice.actions;
