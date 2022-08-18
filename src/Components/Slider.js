import React, { Component } from "react";
import Slider from "react-slick";

const SliderCard = ({ image, heading, button, description, offer }) => {
	return (
		<div className=' bg-green-200 rounded mt-4 relative overflow-hidden'>
			<div className='absolute top-0 right-0 py-6 pr-10 w-2/5'>
				<h1 className='text-lime-800 font-sans text-sm md:text-xl uppercase'>
					{heading}
				</h1>
				<p className='text-sm md:text-3xl font-serif text-black capitalize my-2 md:mb-5'>
					{description}
				</p>
				<span className='text-gray-500 text-sm md:text-xl my-6'>
					{offer}
				</span>
				<div className='py-1 px-3 my-3 w-fit rounded-xl text-white bg-lime-700 uppercase text-xs md:text-lg cursor-pointer hover:bg-cyan-500'>
					{button}
				</div>
			</div>
			<div className=''>
				<div className='p-6'>
					<img
						src={image}
						alt={heading}
						className='object-cover w-1/2 h-52 rounded opacity-90'
					/>
				</div>
			</div>
		</div>
	);
};

export default class AutoPlaySlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
		};
		return (
			<div className='max-w-4xl w-full aspect-video mt-16 md:-mt-0.5 md:mx-1 md:-mb-32 lg:-mb-52'>
				<Slider {...settings}>
					<SliderCard
						image='https://images.unsplash.com/photo-1542139688013-5e39ad5509ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNvZmElMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
						heading='Offer 2022'
						button='get it now'
						description='pick your book, and relax'
						offer='comes with 1 throw pillow'
					/>
					<SliderCard
						image='https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29mYSUyMGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
						heading='top collections 2022'
						button='shop now'
						description='we serve your dream furniture'
						offer='Get 50% off all products'
					/>
					<SliderCard
						image='https://images.unsplash.com/photo-1612152668323-b7f49335ebde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHNvZmElMjBiZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
						heading='Exlusive offer'
						button='grab now!!'
						description='throw pillows at throw away price'
						offer='Buy 5 get 1 throw pillow'
					/>
					<SliderCard
						image='https://images.unsplash.com/photo-1528208079124-a2387f039c99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
						heading='top collections 2022'
						button='shop now'
						description='we serve your dream furniture'
						offer='Get 50% off all products'
					/>
				</Slider>
			</div>
		);
	}
}
