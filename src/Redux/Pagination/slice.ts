import { createSlice } from "@reduxjs/toolkit";

type PaginationSlice = {
  limit: number;
  skip: number;
};

const initialState: PaginationSlice = {
  limit: 6,
  skip: 0,
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextBtn: (state, action) => {
      state.skip = state.skip + action.payload;
    },
    prevBtn: (state, action) => {
      state.skip = state.skip - action.payload;
    },
  },
});

export const paginationReducer = slice.reducer;
export const { nextBtn, prevBtn } = slice.actions;
