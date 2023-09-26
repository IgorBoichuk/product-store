import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://dummyjson.com/products
// ?limit=6
// &skip=6
// &select=price,title,thumbnail,description -

type Paginations = {
  limit: number;
  skip: number;
};

axios.defaults.baseURL = "https://dummyjson.com";
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({ limit, skip }: Paginations, thunkApi) => {
    try {
      const { data } = await axios.get(`/products?limit=${limit}&skip=${skip}`);

      return data.products;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
