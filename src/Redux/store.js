import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/productsSlice/productsSlice";

export default configureStore({
	reducer: {
		products: productsReducer,
	},
});
