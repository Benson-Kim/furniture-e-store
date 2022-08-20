import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Product from "./Pages/Products/Product";
import ProductsList from "./Pages/Products/ProductsList";
import CategoryProducts from "./Pages/Products/CategoryProducts";
import Cart from "./Pages/Cart/Cart";

const App = () => {
	return (
		<div className='font-sans leading-normal tracking-normal'>
			<Header />
			<Routes>
				<Route path='/cart' element={<Cart />} />
			</Routes>
			<div className='flex flex-col md:flex-row md:relative md:mt-20'>
				<Sidebar />
				<main
					id='main'
					className='w-full  flex-grow  flex-1 pb-24  md:pb-5 md:min-h-screen'
				>
					<div className=''>
						<Routes>
							<Route path='/' element={<ProductsList />} />
							<Route
								path='/:categoryname'
								element={<CategoryProducts />}
							/>
							<Route
								path='/product/:productid'
								element={<Product />}
							/>
						</Routes>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default App;
