import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	fetchCategories,
	selectAllCategories,
} from "../Redux/slices/productsSlice/catSlice";

const Sidebar = () => {
	const dispatch = useDispatch();
	const categories = useSelector(selectAllCategories);
	const status = useSelector((state) => state.categories.status);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchCategories());
		}
	}, [status, dispatch]);

	return (
		<aside
			aria-label='alternative nav'
			className='fixed bg-gray-50 min-h-20 shadow-md w-full z-10 bottom-0 md:relative md:min-h-screen md:w-48'
		>
			<ul className='list-reset flex flex-row flex-wrap px-1 pt-3 text-center md:flex-col md:py-3 md:px-2 md:text-left'>
				<li className='hidden md:inline-flex px-5 border-b pt-6'>
					<div className='flex flex-row items-center h-8'>
						<div className='font-light tracking-wide text-zinc-700'>
							Categories
						</div>
					</div>
				</li>
				{categories.map((category, index) => (
					<li key={index}>
						<Link
							to={`/${category}`}
							className='relative capitalize flex flex-row items-center h-11 pr-6 text-zinc-600 font-light border-l-4 border-transparent hover:font-normal hover:text-white hover:bg-cyan-600 hover:border-cyan-900 focus:outline-none'
						>
							<span className='ml-2 text-sm tracking-wide truncate '>
								{category}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
