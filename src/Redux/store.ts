import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Products/slice";

//state.productsList.products
//state.productsList.errro
export const store = configureStore({
  reducer: {
    productsList: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
