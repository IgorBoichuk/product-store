import { createSlice } from "@reduxjs/toolkit";

type Modal = {
  isModal: boolean;
};

const initialState: Modal = {
  isModal: false,
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const modalReducer = slice.reducer;
export const { toggleModal } = slice.actions;
