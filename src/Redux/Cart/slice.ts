import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types/types"

type CartSlice = {
	list: Product[]
	filter: []
	totalPrice: number
	// inCart: boolean
}

const initialState: CartSlice = {
	list: [],
	filter: [],
	totalPrice: 0,
}
const calcSum = (state: CartSlice) => (state.totalPrice = state.list.reduce((acc, item) => acc + item.price, 0))

const slice = createSlice({
	name: "productsCart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const item = {
				...action.payload,
				count: 1,
			}
			// const inCart = state.list.filter(i => i.id === action.payload.id)
			// console.log(inCart)

			state.list.push(item)
			state.totalPrice = calcSum(state)
			state.filter = state.list
		},
		removeItem: (state, action: PayloadAction<number>) => {
			// const index = state.list.findIndex((i) => i.id === action.payload);
			// if (index) {
			//   state.list.splice(index, 1);
			// }

			state.list = state.list.filter(item => item.id !== action.payload)

			state.totalPrice = calcSum(state)
			state.filter = state.list
		},
		cartQuary: (state, action) => {
			const filteredData = state.list.filter(
				item =>
					item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
					item.description.toLowerCase().includes(action.payload.toLowerCase())
			)

			state.filter = filteredData
		},
	},
})

export const cartReducer = slice.reducer
export const { addToCart, removeItem, cartQuary } = slice.actions
