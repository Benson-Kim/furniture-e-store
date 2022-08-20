import React, { useState } from "react";
import { BsCartPlus, BsEye, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const [isHovered, setHovered] = useState(false);
	return (
		<div
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => setHovered(false)}
			className='rounded-md border bg-white p-3 hover:border-collapse hover:shadow hover:shadow-gray-400 md:relative'
		>
			{isHovered && (
				<div className=' md:absolute right-2 top-2'>
					<div className='flex gap-x-3'>
						<button className='text-gray-600 p-1 rounded-l-lg rounded-t-lg font-light bg-gray-100 hover:text-gray-700 hidden md:inline-block'>
							<BsEye className='h-5 w-5' />
						</button>
						<button className='text-gray-600 p-1 rounded-r-lg rounded-t-lg font-light bg-gray-100 hover:text-gray-700'>
							<BsHeart className='h-5 w-5' />
						</button>
					</div>
				</div>
			)}
			<Link to={`/product/${product.id}`} className=''>
				<div className='mb-2 flex items-center justify-between'>
					<span className='rounded-tr-lg rounded-bl-lg bg-gray-50 px-1.5 text-center text-sm capitalize text-gray-600'>
						{product?.brand}
					</span>
					<button className='text-gray-600 p-1 rounded-r-lg rounded-t-lg font-light hover:bg-gray-700  md:hidden'>
						<BsHeart className='h-5 w-5' />
					</button>
				</div>
				<div className='flex flex-col'>
					<div className='flex-shrink items-center justify-center'>
						<div className=''>
							<img
								src={product?.images[0]}
								alt={product?.title}
								className='mt-1 mb-2 h-48 w-full rounded object-cover '
							/>
						</div>
					</div>
					<div className='my-2 flex-1'>
						<h2 className='text-sm text-gray-600'>
							{product?.title}
						</h2>
						<article className='flex items-center justify-between'>
							<div className='flex items-center'>
								<p className='text-lg font-semibold'>
									${product?.price}
								</p>
								<span className='ml-2 hidden rounded-r-lg rounded-t-lg bg-gray-100 px-1.5 text-center text-sm capitalize text-gray-700 sm:inline-flex'>
									-{product?.discountPercentage}%
								</span>
							</div>
							<span className='text-right text-gray-500 line-through'>
								$
								{Math.ceil(
									product?.price +
										(product?.price *
											product.discountPercentage) /
											100,
								)}
							</span>
						</article>
					</div>
				</div>
			</Link>
			<button className='flex w-full items-center justify-center rounded-md bg-cyan-600 py-2 font-medium uppercase text-white shadow hover:bg-cyan-700'>
				<BsCartPlus className='mr-2 h-5 w-5' />
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
