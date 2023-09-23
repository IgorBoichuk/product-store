import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://dummyjson.com/products

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");

      return data.products;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
