import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";

type CartSlice = {
	list: Product[];
	filter: string;
	totalPrice: number;
	// inCart: boolean
};

const initialState: CartSlice = {
	list: [],
	filter: "",
	totalPrice: 0,
};
const calcSum = (state: CartSlice) =>
	(state.totalPrice = state.list.reduce((acc, item) => acc + item.price * item.count, 0));

const slice = createSlice({
	name: "productsCart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const item = {
				...action.payload,
				count: 1,
			};
			const inCart = state.list.find(i => i.id === action.payload.id);
			if (inCart) {
				state.list.filter(item => (item.id === action.payload.id ? (item.count += 1) : item));
			} else {
				state.list.push(item);
			}
			state.totalPrice = calcSum(state);
		},

		removeItem: (state, action: PayloadAction<number>) => {
			state.list = state.list.filter(item => item.id !== action.payload);
			state.totalPrice = calcSum(state);
		},

		cartQuary: (state, action) => {
			state.filter = action.payload;
		},
		changeCountPLus: (state, action: PayloadAction<number>) => {
			const updateProduct = state.list.find(item => item.id === action.payload);
			if (updateProduct) {
				updateProduct.count = updateProduct.count + 1;
				state.totalPrice = calcSum(state);
			}
		},
		changeCountMinus: (state, action: PayloadAction<number>) => {
			const updateProduct = state.list.find(item => item.id === action.payload);
			if (updateProduct && updateProduct.count > 1) {
				updateProduct.count = updateProduct.count - 1;
				state.totalPrice = calcSum(state);
			}
		},
	},
});

export const cartReducer = slice.reducer;
export const { addToCart, removeItem, cartQuary, changeCountPLus, changeCountMinus } = slice.actions;
