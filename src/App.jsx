import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Product from "./Pages/Products/Product";
import ProductsList from "./Pages/Products/ProductsList";
import AutoPlaySlider from "./Components/Slider";

const App = () => {
	return (
		<div className='font-sans leading-normal tracking-normal'>
			<Header />
			<div className='flex flex-col md:flex-row md:relative md:mt-20'>
				<Sidebar />
				<AutoPlaySlider />
				<Routes>
					<Route path='/' element={<ProductsList />} />
					<Route path='/product/:productid' element={<Product />} />
				</Routes>
				{/* <Main /> */}
			</div>
			<Footer />
		</div>
	);
};

export default App;
