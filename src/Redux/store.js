import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/productsSlice/productsSlice";
import categoriesReducer from "./slices/productsSlice/catSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
		cart: cartReducer,
	},
});
