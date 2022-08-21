import React, { useState } from "react";
import {
	BsCartPlus,
	BsFillFileMinusFill,
	BsFillFilePlusFill,
	BsHeart,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
	addItemQuantity,
	addToCart,
	addToWishlist,
	minusItemQuantity,
	removeFromCart,
	removeFromWishlist,
} from "../../Redux/slices/cartSlice";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const [isHovered, setHovered] = useState(false);

	const { cart, wishlist } = useSelector((state) => state.cart);

	const cartItem = cart.find((item) => item.id === product.id);
	const wishItem = wishlist.find((item) => item.id === product.id);

	const handleWishlist = () => {
		if (wishItem) {
			dispatch(removeFromWishlist(product.id));
		} else {
			dispatch(addToWishlist(product));
		}
	};

	const addItems = () => {
		if (cartItem) {
			dispatch(addItemQuantity(product.id));
		} else {
			dispatch(addToCart(product));
		}
	};

	const removeItems = () => {
		if (cartItem?.quantity > 1) {
			dispatch(minusItemQuantity(product.id));
		} else {
			dispatch(removeFromCart(product.id));
		}
	};

	return (
		<div
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => setHovered(false)}
			className='rounded-md border bg-white p-3 hover:border-collapse hover:shadow hover:shadow-gray-400 md:relative'
		>
			{isHovered && (
				<div className='md:absolute right-2 top-2'>
					{wishItem ? (
						<button
							onClick={handleWishlist}
							className='text-gray-600 hidden p-1 rounded-r-lg rounded-t-lg font-light bg-teal-600 hover:text-teal-900 cursor-not-allowed '
						>
							<BsHeart className='h-5 w-5' />
						</button>
					) : (
						<button
							onClick={handleWishlist}
							className='text-gray-600 p-1 rounded-r-lg rounded-t-lg font-light bg-gray-100 hover:text-gray-700'
						>
							<BsHeart className='h-5 w-5' />
						</button>
					)}
				</div>
			)}
			<Link to={`/product/${product.id}`} className=''>
				<div className='mb-2 flex items-center justify-between'>
					<span className='rounded-tr-lg rounded-bl-lg bg-gray-100 px-1.5 text-center text-sm capitalize text-gray-600'>
						{product?.brand}
					</span>
					{wishItem ? (
						<button
							onClick={handleWishlist}
							className='text-gray-100 cursor-not-allowed p-1 rounded-r-lg rounded-t-lg font-light bg-teal-600 hover:text-teal-200'
						>
							<BsHeart className='h-5 w-5' />
						</button>
					) : (
						<button
							onClick={handleWishlist}
							className='text-gray-600 md:hidden p-1 rounded-r-lg rounded-t-lg font-light hover:bg-gray-700'
						>
							<BsHeart className='h-5 w-5' />
						</button>
					)}
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
								<span className='ml-2 hidden rounded-r-lg rounded-t-lg bg-gray-100 px-1.5 text-center text-sm capitalize text-gray-600 sm:inline-flex'>
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

			{cartItem?.id ? (
				<div className='w-full flex items-center justify-between rounded-md bg-cyan-700 text-white py-2 font-medium px-3 shadow'>
					<BsFillFileMinusFill
						className='cursor-pointer hover:fill-teal-200 text-2xl'
						onClick={removeItems}
					/>
					{cartItem?.quantity}
					<BsFillFilePlusFill
						className='cursor-pointer hover:fill-teal-200 text-2xl'
						onClick={addItems}
					/>
				</div>
			) : (
				<button
					onClick={addItems}
					className=' w-full flex items-center justify-center rounded-md bg-cyan-600 text-white py-2 font-light uppercase shadow hover:bg-cyan-700'
				>
					<BsCartPlus className='mr-2 h-5 w-5' />
					Add to Cart
				</button>
			)}
		</div>
	);
};

export default ProductCard;
