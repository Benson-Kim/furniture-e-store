import React from "react";
import { useSelector } from "react-redux";
import WishItem from "./WishItem";

const Wishlist = () => {
	const { wishlist } = useSelector((state) => state.cart);
	return (
		<div class='shadow-md max-w-3xl m-auto w-full'>
			<div class='bg-white px-10 py-10 items-center'>
				<div class='flex w-full justify-between border-b pb-8'>
					<h1 class='font-semibold text-xl'>
						{wishlist.length === 0 && "No"}Things to In the Bookmark
					</h1>
					<h2 class='font-semibold text-xl'>
						{wishlist.reduce((acc, item) => acc + 1, 0)} Items
					</h2>
				</div>
				{wishlist.map((item) => (
					<WishItem product={item} key={item.productID} />
				))}
			</div>
		</div>
	);
};

export default Wishlist;
