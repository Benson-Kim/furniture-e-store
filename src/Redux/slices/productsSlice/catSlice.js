import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	categories: [],
	status: "idle",
	error: null,
};

const CategoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCategories.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.categories = state.categories.concat(action.payload);
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const fetchCategories = createAsyncThunk(
	"products/getCategories",
	async () => {
		const res = await axios.get(
			"https://dummyjson.com/products/categories",
		);
		return res.data;
	},
);

export default CategoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories.categories;

// export const selectCategoryProducts = (state, category) =>
// 	state.products.products.find((product) => product.category === category);

// export const selectProdById = (state, productId) =>
// 	state.products.products.find((product) => product.id === productId);
