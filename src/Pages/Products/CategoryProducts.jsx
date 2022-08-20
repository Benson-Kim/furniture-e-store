import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AutoPlaySlider from "../../Components/Slider";
import AdvertCard from "../AdvertCard";
import ProductCard from "./ProductCard";
import Testimonial from "../Testimonial";
import axios from "axios";

const CategoryProducts = () => {
	const { categoryname } = useParams();

	const [effproducts, setproducts] = useState(null);
	useEffect(() => {
		setproducts(null);
		axios
			.get(`https://dummyjson.com/products/category/${categoryname}`)
			.then((res) => {
				setproducts(res.data.products);
			});
	}, [categoryname]);

	return (
		<>
			<AutoPlaySlider />
			<AdvertCard />
			<div className='bg-gray-100  m-5  border-b border-indigo-200 rounded-lg '>
				<h1 className='text-center mb-3 bg-cyan-600 py-2 rounded-t text-xl text-white'>
					Top Products:{" "}
					{categoryname.charAt(0).toUpperCase() +
						categoryname.slice(1)}
				</h1>
				<div className='grid grid-cols-1 gap-2 m-4 sm:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-5 5xl:grid-cols-6'>
					{effproducts?.map((product) => (
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

export default CategoryProducts;
