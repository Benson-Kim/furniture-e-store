import React from "react";
import { BiCabinet, BiChair } from "react-icons/bi";
import { GiSofa } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
				<li>
					<Link
						to='/'
						className='relative flex flex-row items-center h-11 pr-6 text-zinc-600 font-light border-l-4 border-transparent hover:font-normal hover:text-white hover:bg-green-500 hover:border-green-900 focus:outline-none'
					>
						<span className='inline-flex justify-center items-center ml-4'>
							<IoBedSharp className='w-5 h-5' />
						</span>
						<span className='ml-2 text-sm tracking-wide truncate '>
							Beds
						</span>
					</Link>
				</li>
				<li>
					<Link
						to='/'
						className='relative flex flex-row items-center h-11 pr-6 text-zinc-600 font-light border-l-4 border-transparent hover:font-normal hover:text-white hover:bg-green-500 hover:border-green-900 focus:outline-none'
					>
						<span className='inline-flex justify-center items-center ml-4'>
							<BiCabinet className='w-5 h-5' />
						</span>
						<span className='ml-2 text-sm tracking-wide truncate'>
							Cabinets
						</span>
					</Link>
				</li>
				<li>
					<Link
						to='/'
						className='relative flex flex-row items-center h-11 pr-6 text-zinc-600 font-light border-l-4 border-transparent hover:font-normal hover:text-white hover:bg-green-500 hover:border-green-900 focus:outline-none'
					>
						<span className='inline-flex justify-center items-center ml-4'>
							<BiChair className='w-5 h-5' />
						</span>
						<span className='ml-2 text-sm tracking-wide truncate'>
							Chairs
						</span>
					</Link>
				</li>
				<li>
					<Link
						to='/'
						className='relative flex flex-row items-center h-11 pr-6 text-zinc-600 font-light border-l-4 border-transparent hover:font-normal hover:text-white hover:bg-green-500 hover:border-green-900 focus:outline-none'
					>
						<span className='inline-flex justify-center items-center ml-4'>
							<GiSofa className='w-5 h-5' />
						</span>
						<span className='ml-2 text-sm tracking-wide truncate'>
							Sofas
						</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
