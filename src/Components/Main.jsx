import React from "react";
import ProductCard from "../Pages/Products/ProductCard";
import Testimonial from "../Pages/Testimonial";

import { FaShippingFast } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import AutoPlaySlider from "./Slider";
import { useSelector } from "react-redux";
import Product from "../Pages/Products/Product";

const Card = ({ icon, heading, description }) => {
	return (
		<div className='shadow-sm bg-gray-100 md:shadow-md shadow-gray-400 rounded md:hover:scale-1 hover:shadow hover:shadow-orange-400'>
			<div className='flex flex-row items-center p-2 md:px-4 md:py-3'>
				<i className='flex-shrink text-3xl sm:text-5xl lg:text-3xl 2xl:text-5xl text-green-500  mr-4'>
					{icon}
				</i>
				<div className='flex-1 '>
					<h2 className='font-semibold text-base sm:text-2xl lg:text-base 2xl:text-3xl capitalize text-gray-600'>
						{heading}
					</h2>
					<p className='text-sm 2xl:text-base font-light'>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

const Main = () => {
	const products = useSelector((state) => state.products);

	return (
		<main
			id='main'
			className='w-full flex-grow  flex-1 pb-24  md:pb-5 md:min-h-screen'
		>
			<AutoPlaySlider className='' />
			<div className='flex flex-wrap mx-5  '>
				<div className='w-full grid grid-cols-1 gap-x-5 gap-y-4 md:gap-3 my-7 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4'>
					<Card
						icon={<FaShippingFast />}
						heading={"Free Shipping"}
						description={"For orders above Ksh. 10, 000"}
					/>
					<Card
						icon={<ImGift />}
						heading={"Smart Gift Card"}
						description={"Buy KSh 100, 000 to get card"}
					/>
					<Card
						icon={<GiWallet />}
						heading={"Quick Payment"}
						description={"100% secure payment"}
					/>
					<Card
						icon={<BiSupport />}
						heading={"24/7 Support"}
						description={"Quick response from support team"}
					/>
				</div>
			</div>
			<div className='bg-gray-50  m-5  border-b border-indigo-200 rounded-lg '>
				<h1 className='text-center mb-3 bg-cyan-600 py-2 rounded-t text-xl text-white'>
					Top Products
				</h1>
				<div className='flex flex-wrap'>
					{products?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>

			<div className='mt-2 flex flex-grow flex-row flex-wrap'>
				<Testimonial />
			</div>
			<div className='mt-2 flex flex-grow flex-row flex-wrap'>
				<Product />
			</div>
		</main>
	);
};

export default Main;
