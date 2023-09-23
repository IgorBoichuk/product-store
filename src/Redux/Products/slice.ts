// Slice - частина стейта
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operation";
type ProductsState = {
  products: any;
  loading: boolean;
  error: string;
  filter: string;
};

const initialState: ProductsState = {
  products: [],
  filter: "all",
  loading: false,
  error: "",
};

// Будуємо слайс - частину стейта
// Він має об'єкт налаштувань
// name - назва слайса
// initialState - початковий стан, для стейту
// reducers - наші операції для стейту, котрі є локальними (не робота з сервером)
const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// створюємо редьюсер від нашого слайса для стора - глобальний великий стейт
// експортуємо редьюсер з слайса
export const productReducer = slice.reducer;