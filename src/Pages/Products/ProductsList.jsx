import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
	fetchProducts,
	selectAllProducts,
} from "../../Redux/slices/productsSlice/productsSlice";
import AdvertCard from "../AdvertCard";
import AutoPlaySlider from "../../Components/Slider";
import Testimonial from "../Testimonial";

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
		<>
			<AutoPlaySlider />
			<AdvertCard />
			<div className='bg-gray-100  m-5  border-b border-indigo-200 rounded-lg '>
				<h1 className='text-center mb-3 bg-cyan-600 py-2 rounded-t text-xl text-white'>
					Top Products
				</h1>
				<div className='grid grid-cols-1 gap-2 m-4 sm:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-5 5xl:grid-cols-6'>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
			<div className='mt-2 flex flex-grow flex-row flex-wrap'>
				<Testimonial />
			</div>
		</>
	);
};

export default ProductsList;
