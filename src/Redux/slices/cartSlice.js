import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: {},
	favItems: {},
};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, payload) => {
			const cartItems = state.cartItems;

			state.cartItems += 1;
		},
	},
});
