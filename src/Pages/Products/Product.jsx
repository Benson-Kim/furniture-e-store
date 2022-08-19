import React, { createRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsCart2, BsFileMinus, BsFilePlus } from "react-icons/bs";
// import ReactImageGallery from "react-image-gallery";

import { selectProdById } from "../../Redux/slices/productsSlice/productsSlice";

const Product = () => {
	const { productid } = useParams();

	const product = useSelector((state) =>
		selectProdById(state, Number(productid)),
	);

	const [index, setIndex] = useState(0);
	const myRef = createRef();

	const handleTab = (index) => {
		setIndex(index);
		const images = myRef.current.children;
		for (let i = 0; i < images.length; i++) {
			images[i].className = images[i].className.replace(
				"active:opacity-100",
				"",
			);
		}
		images[index].className = "active:opacity-100";
	};

	if (!product) {
		return (
			<section>
				<h2>No product found</h2>
			</section>
		);
	}

	return (
		<section>
			<article className='flex justify-around flex-wrap py-7 m-6'>
				<div className='max-w-lg min-w-sm overflow-hidden'>
					<img
						src={product?.images[index]}
						alt={product?.title}
						className='w-full h-full max-h-96 block object-cover'
					/>
					{/* thumbnails */}
					<div
						ref={myRef}
						className='sm:h-24 md:h-36 max-w-lg flex gap-x-6 md:gap-x-3 cursor-pointer mt-8 mb-3 '
					>
						{product?.images.map((img, index) => (
							<img
								key={index}
								onClick={() => handleTab(index)}
								src={img}
								alt={product?.title}
								className='w-28 h-full md:h-4/5  block object-cover  opacity-70 rounded-sm border focus:border-gray-500 focus:opacity-100  active:opacity-100 active:border-gray-500'
							/>
						))}
					</div>
				</div>
				<div className='max-w-lg min-w-sm  mt-4'>
					<div className='shadow-sm shadow-gray-200 rounded'>
						<h2 className='mb-4 px-4 uppercase tracking-wide text-green-600 bg-green-50 py-2 rounded-t-md font-semibold '>
							{product?.brand}
						</h2>
						<p className='text-black px-5 font-bold text-2xl tracking-wider font-sans capitalize'>
							{product?.title}
						</p>
						<p className='leading-6 px-6 my-4 text-gray-500 pb-3'>
							{product.description}
						</p>
					</div>

					{/* pricing */}
					<div className='mt-4 flex justify-between md:block'>
						<span className='flex items-center'>
							<h1 className='font-bold text-2xl mr-3'>
								${product.price}.00
							</h1>
							<h2 className='bg-green-100 text-green-700 font-semibold  px-2 rounded'>
								{product?.discountPercentage}%
							</h2>
						</span>
						<h3 className='line-through text-gray-400 text-xl md:my-4'>
							$
							{(
								product?.price +
								product?.price * product?.discountPercentage
							).toFixed(2)}
						</h3>
					</div>
					{/* quantity and cart */}
					<div className='mt-8 flex flex-col w-full space-y-4 md:flex-row justify-between items-center md:space-x-4'>
						{/* qty */}
						<div className='bg-gray-100 text-center w-full flex items-center justify-between px-4 py-1.5 rounded-md'>
							<BsFileMinus className='text-green-500 text-3xl cursor-pointer hover:scale-x-105 hover:text-green-600 ' />
							<input
								type='text'
								value='0'
								className='font-bold text-2xl text-gray-800 w-10 bg-inherit focus:outline-none'
							/>
							<BsFilePlus className='text-green-500 text-3xl cursor-pointer hover:scale-x-105 hover:text-green-600 ' />
						</div>
						<button className='w-full text-xl flex items-center justify-center gap-x-2 bg-green-600 text-white font-semibold py-2 rounded-md hover:font-light hover:bg-green-700'>
							<BsCart2 className='text-2xl mb-1' />
							Add to Cart
						</button>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Product;
