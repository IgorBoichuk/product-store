import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchProducts } from "../Products/operation";

type PaginationSlice = {
	limit: number;
	skip: number;
	pages: number;
	currentPage: number;
};

const initialState: PaginationSlice = {
	limit: 6,
	skip: 0,
	pages: 0,
	currentPage: 1,
};

const notify = () => toast("Сторінки закінчились");

const slice = createSlice({
	name: "pagination",
	initialState,
	reducers: {
		changePage: (state, action) => {
			if (action.payload === 1) {
				state.skip = 0;
				state.currentPage = action.payload;
				return;
			}
			state.skip = (action.payload - 1) * state.limit;
			state.currentPage = action.payload;
		},
		prevBtn: (state, action) => {
			state.skip > state.limit ? (state.skip = state.skip - action.payload) : ((state.skip = 0), notify());
			state.currentPage--;
		},

		nextBtn: (state, action) => {
			state.skip = state.skip + action.payload;
			state.currentPage++;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.pages = Math.ceil(action.payload.total / state.limit);
		});
	},
});

export const paginationReducer = slice.reducer;
export const { nextBtn, prevBtn, changePage } = slice.actions;
