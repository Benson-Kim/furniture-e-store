import React from "react";
import { BsArrowDown, BsBag, BsHeart, BsPersonCircle } from "react-icons/bs";
import { GiWhaleTail } from "react-icons/gi";
import { MdLogout, MdOutlineSettings, MdPersonOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/*Toggle dropdown list*/
function toggleDD(myDropMenu) {
	document.getElementById(myDropMenu).classList.toggle("invisible");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (
		!event.target.matches(".drop-button") &&
		!event.target.matches(".drop-search")
	) {
		var dropdowns = document.getElementsByClassName("dropdownlist");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (!openDropdown.classList.contains("invisible")) {
				openDropdown.classList.add("invisible");
			}
		}
	}
};

const Header = () => {
	const { cart, wishlist } = useSelector((state) => state.cart);
	console.log(cart.length);
	return (
		<header>
			<nav
				aria-label='menu nav'
				className='fixed top-0 z-20 mt-0 h-auto w-full shadow shadow-gray-100 bg-teal-50 px-1 md:pt-1'
			>
				<div className='py-3 min-w-full px-3  mb-3 font-light items-center text-white flex flex-wrap md:flex-nowrap justify-between'>
					<div className=''>
						<Link to='/'>
							<GiWhaleTail className='text-3xl text-teal-600' />
						</Link>
					</div>
					<span className='w-1/2 hidden md:flex items-center justify-between rounded-lg border-2 border-teal-500'>
						<input
							aria-label='search'
							type='search'
							id='search'
							placeholder='Search here...'
							className='appearance-none w-2/3  rounded-l border-r-2 border-teal-600 py-1.5 px-2 leading-normal text-gray-600 transition focus:border-gray-400 focus:outline-none'
						/>
						<select
							name='categories'
							id='categories'
							className='w-1/3 bg-white rounded-r-lg font-light text-gray-700 h-9 capitalize px-2 focus:outline-none'
						>
							<option value=''>All</option>
							<option value='tables'>tables</option>
							<option value='sofas'>sofas</option>
							<option value='chairs'>chairs</option>
							<option value='cabinets'>cabinets</option>
							<option value='beds'>beds</option>
						</select>
					</span>
					<div className=''>
						<ul className='list-reset flex flex-1 justify-between items-center md:flex-none'>
							<li className='md:mr-3 md:flex-none'>
								<Link
									to='/cart'
									className='inline-flex relative w-fit cursor-pointer '
								>
									<div className='absolute inline-block top-0 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 px-1.5 py-1 text-sm leading-none text-center whitespace-nowrap align-baseline font-light bg-teal-700 text-zinc-100 rounded-full z-10 '>
										{cart?.length}
									</div>
									<div className='text-gray-700 hover:text-teal-100 hover:bg-teal-600 p-1.5 flex items-center justify-center text-center rounded-lg shadow-md'>
										<div>
											<BsBag className='h-5 w-5' />
										</div>
									</div>
								</Link>
							</li>
							<li className='md:mr-3 md:flex-none'>
								<Link
									to='/wishlist'
									className='inline-flex relative w-fit cursor-pointer '
								>
									<div className='absolute inline-block top-0 right-1 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 px-1.5 py-1 text-sm leading-none text-center whitespace-nowrap align-baseline font-light bg-teal-700 text-zinc-100 rounded-full z-10 '>
										{wishlist?.length}
									</div>
									<div className='text-gray-700 hover:text-teal-100 hover:bg-teal-600 p-1.5 flex items-center justify-center text-center rounded-lg shadow-md'>
										<div>
											<BsHeart className='h-5 w-5' />
										</div>
									</div>
								</Link>
							</li>

							<li className='flex-1 mb-2 md:mr-3 md:flex-none'>
								<div className='relative inline-block'>
									<button
										onClick={() => toggleDD("myDropdown")}
										className='drop-button py-2 px-2 flex items-center text-gray-600 no-underline hover:text-teal-500'
									>
										<BsPersonCircle className='text-2xl mr-1' />
										Account
										<BsArrowDown className='inline text-lg fill-current' />
									</button>
									<div
										id='myDropdown'
										className='dropdownlist invisible absolute right-0 z-30 mt-4 overflow-auto bg-teal-500 px-3 py-2  text-white'
									>
										<Link
											to='/'
											className='flex items-center py-1.5 px-1 text-sm text-white no-underline hover:bg-teal-100 hover:text-teal-800'
										>
											<MdPersonOutline className='mr-2 h-5 w-5' />
											<p>Profile</p>
										</Link>
										<Link
											to='/'
											className='flex items-center py-1.5 px-1 text-sm text-white no-underline hover:bg-teal-100 hover:text-teal-800'
										>
											<MdOutlineSettings className='mr-2 h-5 w-5' />

											<p>Settings</p>
										</Link>
										<Link
											to='/'
											className='flex items-center py-1.5 px-1 text-sm text-white no-underline hover:bg-teal-100 hover:text-teal-800'
										>
											<MdLogout className='mr-2 h-5 w-5' />
											<p>Log Out</p>
										</Link>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
