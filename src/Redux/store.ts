import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Products/slice";
import { partsReducer } from "./Products/testSlice";

//state.productsList.products
//state.productsList.errro
export const store = configureStore({
  reducer: {
    productsList: productReducer,
    partsList: partsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
