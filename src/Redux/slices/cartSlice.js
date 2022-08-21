import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	wishlist: [],
	checkout: [],
};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart = [{ ...action.payload, quantity: 1 }, ...state.cart];
		},
		removeFromCart: (state, action) => {
			const newCart = state.cart.filter(
				(item) => item.id !== action.payload,
			);
			state.cart = newCart;
		},
		addItemQuantity: (state, action) => {
			const newCart = state.cart.map((item) => {
				if (item.id === action.payload) item.quantity++;
				return item;
			});
			state.cart = newCart;
		},
		minusItemQuantity: (state, action) => {
			const newCart = state.cart.map((item) => {
				if (item.id === action.payload) item.quantity--;
				return item;
			});
			state.cart = newCart;
		},
		addToWishlist: (state, action) => {
			state.wishlist = [action.payload, ...state.wishlist];
		},
		removeFromWishlist: (state, action) => {
			const newFavourites = state.wishlist.filter(
				(item) => item.id !== action.payload,
			);
			state.wishlist = newFavourites;
		},
		addToCheckout: (state, action) => {
			state.checkout = [...state.checkout, action.payload];
		},
	},
});

export const {
	addToCart,
	addToWishlist,
	addToCheckout,
	addItemQuantity,
	minusItemQuantity,
	removeFromCart,
	removeFromWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
