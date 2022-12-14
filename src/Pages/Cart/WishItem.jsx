import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ImBin2 } from "react-icons/im";
import {
	addItemQuantity,
	addToCart,
	removeFromWishlist,
} from "../../Redux/slices/cartSlice";

function WishItem({ product }) {
	const dispatch = useDispatch();

	const { wishlist, cart } = useSelector((state) => state.cart);

	const favItem = wishlist?.find((item) => item.id === product.id);
	const cartItem = cart?.find((item) => item.id === product.id);

	const removeWishlist = () => {
		dispatch(removeFromWishlist(product.id));
	};

	const addItems = () => {
		if (cartItem) {
			dispatch(addItemQuantity(product.id));
		} else {
			dispatch(addToCart(product));
		}
	};

	return (
		<div className=''>
			<div className='m-5 p-5 border border-gray-100 hover:bg-gray-100 hover:border-blue-200 rounded  flex items-center justify-between'>
				<div className='flex gap-x-5'>
					<img
						className='h-24'
						srcsrc={favItem?.images[0]}
						alt={favItem?.title}
					/>
					<span className='flex flex-col justify-between'>
						<p className=''>{favItem?.title}</p>
						<span>{favItem?.price}</span>
					</span>
				</div>
				<span className='flex flex-col h-24 justify-between'>
					{cartItem?.id ? (
						<button
							onClick={addItems}
							disabled
							className='py-1 cursor-not-allowed px-2 bg-gray-600 text-white text-sm capitalize rounded-md  '
						>
							Buy now
						</button>
					) : (
						<button
							onClick={addItems}
							className='py-1 px-2 bg-blue-600 text-white text-sm capitalize rounded-md hover:bg-blue-800 '
						>
							Buy now
						</button>
					)}

					<button
						onClick={removeWishlist}
						className='flex gap-x-1.5 py-1 px-2 rounded-md  text-sm justify-center items-center text-white bg-orange-600 hover:bg-red-500 '
					>
						<ImBin2 />
						<p>Remove</p>
					</button>
				</span>
			</div>
		</div>
	);
}

export default WishItem;
