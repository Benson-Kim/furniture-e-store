import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
	fetchProducts,
	selectAllProducts,
} from "../../Redux/slices/productsSlice/productsSlice";

const ProductsList = () => {
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const status = useSelector((state) => state.products.status);
	const error = useSelector((state) => state.products.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

	return (
		<div className='flex flex-wrap'>
			{products?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductsList;
