import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type PaginationSlice = {
  limit: number;
  skip: number;
};

const initialState: PaginationSlice = {
  limit: 6,
  skip: 0,
};

const notify = () => toast("Сторінки закінчились");

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    prevBtn: (state, action) => {
      state.skip > state.limit
        ? (state.skip = state.skip - action.payload)
        : ((state.skip = 0), notify());
    },

    nextBtn: (state, action) => {
      state.skip = state.skip + action.payload;
    },
  },
});

export const paginationReducer = slice.reducer;
export const { nextBtn, prevBtn } = slice.actions;
