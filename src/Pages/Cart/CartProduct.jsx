import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartProduct = () => {
	return (
		<div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
			<div className='md:flex w-2/5'>
				<div className='w-full flex gap-x-2'>
					<img
						className='h-24'
						src=''
						alt=''
						// src={cartItem?.imageUrl}
						// alt={cartItem?.productName}
					/>

					<div className='flex flex-col gap-y-3 ml-4 flex-grow'>
						<span className='text-sm md:text-lg'>
							{/* {cartItem?.productName} */}
							product name
						</span>
						<span className='text-red-500 text-sm -mt-2'>
							category
							{/* {
								categories?.find(
									(category) =>
										category.categoryId ===
										cartItem?.categoryId,
								)?.categoryName
							} */}
						</span>
						<p
							// onClick={removeItem}
							className='font-semibold hover:text-red-500 text-gray-500 text-xs md:text-sm cursor-pointer'
						>
							Remove
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col -ml-10 md:ml-0 md:flex-row items-center -mt-10 text-xl md:space-x-4 justify-center  w-1/5'>
				<AiOutlineMinus
					className='cursor-pointer font-bold'
					// onClick={removeItems}
				/>
				<p className='text-sm md:text-lg my-3'>
					{/* { cartItem?.quantity } */}3
				</p>
				<AiOutlinePlus
					className='cursor-pointer font-bold'
					// onClick={addItems}
				/>
			</div>
			<span className='text-center text-sm w-1/5 -mt-10 ml-12 md:ml-0 md:text-lg'>
				{/* <CurrencyFormat
					value={cartItem?.price}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"Ksh "}
				/> */}
				500
			</span>
			<span className=' text-sm w-1/5 -mt-10 text-right md:text-center md:text-lg'>
				{/* <CurrencyFormat
					value={cartItem?.price * cartItem?.quantity}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"Ksh "}
				/> */}
				1500
			</span>
		</div>
	);
};

export default CartProduct;
