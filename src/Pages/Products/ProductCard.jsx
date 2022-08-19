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
						<button className='bg-orange-500 hidden md:inline-block p-1 rounded-l-lg rounded-t-lg text-white font-light hover:bg-orange-700'>
							<BsEye className='h-5 w-5' />
						</button>
						<button className='bg-rose-500 p-1 rounded-r-lg rounded-t-lg text-white font-light hover:bg-rose-700'>
							<BsHeart className='h-5 w-5' />
						</button>
					</div>
				</div>
			)}
			<Link to={`/product/${product.id}`} className=''>
				<div className='mb-2 flex items-center justify-between'>
					<span className='rounded-tr-lg rounded-bl-lg bg-green-500 px-1.5 text-center text-sm capitalize text-white'>
						{product?.brand}
					</span>
					<button className='bg-rose-500 p-1 rounded-r-lg rounded-t-lg font-light hover:bg-rose-700  text-white'>
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
									Ksh. {product?.price}
								</p>
								<span className='ml-2 hidden rounded-r-lg rounded-t-lg bg-rose-500 px-1.5 text-center text-sm capitalize text-white sm:inline-flex'>
									-{product?.discountPercentage}%
								</span>
							</div>
							<span className='text-right text-gray-500 line-through'>
								Ksh{" "}
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
			<button className='flex w-full items-center justify-center rounded-md bg-green-500 py-2 font-medium uppercase text-white shadow hover:bg-rose-500'>
				<BsCartPlus className='mr-2 h-5 w-5' />
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
