import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type TestSlice = {
  parts: Product[];
  loading: boolean;
  filter: string;
  error: string;
};

const initialState: TestSlice = {
  parts: [],
  loading: false,
  filter: "all",
  error: "",
};

const slice = createSlice({
  name: "autoparts",
  initialState,
  reducers: {},
});

export const partsReducer = slice.reducer;
