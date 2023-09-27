import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Products/slice";
import { cartReducer } from "./Cart/slice";
import { paginationReducer } from "./Pagination/slice";
import { modalReducer } from "./Modal/slice";

export const store = configureStore({
  reducer: {
    productsList: productReducer,
    cartList: cartReducer,
    pagination: paginationReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
