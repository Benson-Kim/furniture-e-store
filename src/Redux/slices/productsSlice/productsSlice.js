import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	products: [],
	status: "idle",
	error: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products = state.products.concat(action.payload);
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const fetchProducts = createAsyncThunk(
	"products/getProducts",
	async () => {
		const res = await axios.get("https://dummyjson.com/products");
		return res.data.products;
	},
);

export const productsByCategory = createAsyncThunk(
	"products/catProducts",
	async () => {
		let category;
		const res = await axios.get(
			`https://dummyjson.com/products/category/${category}`,
		);
		return res.data.products;
	},
);

export default productsSlice.reducer;

export const selectAllProducts = (state, product) => state.products.products;

export const selectCategoryProducts = (state, category) =>
	state.products.products.find((product) => product.category === category);

export const selectProdById = (state, productId) =>
	state.products.products.find((product) => product.id === productId);
