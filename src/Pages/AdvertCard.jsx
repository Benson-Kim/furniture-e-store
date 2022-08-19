import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { BiSupport } from "react-icons/bi";

const Card = ({ icon, heading, description }) => {
	return (
		<div className='shadow-sm bg-gray-100 md:shadow-md shadow-gray-400 rounded md:hover:scale-1 hover:shadow hover:shadow-orange-400'>
			<div className='flex flex-row items-center p-2 md:px-4 md:py-3'>
				<i className='flex-shrink text-3xl sm:text-5xl lg:text-3xl 2xl:text-5xl text-green-500  mr-4'>
					{icon}
				</i>
				<div className='flex-1 '>
					<h2 className='font-semibold text-base sm:text-2xl lg:text-base 2xl:text-3xl capitalize text-gray-600'>
						{heading}
					</h2>
					<p className='text-sm 2xl:text-base font-light'>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

const AdvertCard = () => {
	return (
		<div className='flex flex-wrap mx-5  '>
			<div className='w-full grid grid-cols-1 gap-x-5 gap-y-4 md:gap-3 my-7 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4'>
				<Card
					icon={<FaShippingFast />}
					heading={"Free Shipping"}
					description={"For orders above Ksh. 10, 000"}
				/>
				<Card
					icon={<ImGift />}
					heading={"Smart Gift Card"}
					description={"Buy KSh 100, 000 to get card"}
				/>
				<Card
					icon={<GiWallet />}
					heading={"Quick Payment"}
					description={"100% secure payment"}
				/>
				<Card
					icon={<BiSupport />}
					heading={"24/7 Support"}
					description={"Quick response from support team"}
				/>
			</div>
		</div>
	);
};

export default AdvertCard;
