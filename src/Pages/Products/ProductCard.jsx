import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	return (
		<Link
			to={`/product/${product.id}`}
			className='w-full p-3 sm:w-1/2 xl:w-1/4 3xl:w-1/5 5xl:w-1/6'
		>
			<div className='cursor-pointer rounded-md border-t bg-white p-4 hover:shadow hover:shadow-gray-600'>
				<div className='mb-2 flex items-center justify-between'>
					<span className='rounded-tr-lg rounded-bl-lg bg-green-500 px-1.5 text-center text-sm capitalize text-white'>
						{product?.brand}
					</span>
					<span className='inline-flex rounded-r-lg rounded-t-lg bg-rose-500 px-1.5 text-center text-sm capitalize text-white sm:hidden'>
						-{product.discountPercentage}%
					</span>
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
					<button className='flex w-full items-center justify-center rounded-md bg-green-500 py-2 font-medium uppercase text-white shadow hover:bg-rose-500'>
						<BsCartPlus className='mr-2 h-5 w-5' />
						Add to Cart
					</button>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
