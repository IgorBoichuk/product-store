import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://dummyjson.com/products
// ?limit=6
// &skip=6
// &select=price,title,thumbnail,description -

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`/products`);

      return data.products;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
