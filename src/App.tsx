import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import { About } from "./pages/about";
import { Navbar } from "./components//navbar/navbar";
import React from "react";
import { ShoppingCartProvider } from "./context/shoppingcartcontext";
import "./App.css";

function App() {
	return (
		<ShoppingCartProvider>
			<Navbar />
			<Routes>
				<Route path="/shopping-cart-react-ts-app" element={<Home />} />
				<Route path="/shopping-cart-react-ts-app/store" element={<Store />} />
				<Route path="/shopping-cart-react-ts-app/about" element={<About />} />
			</Routes>
		</ShoppingCartProvider>
	);
}

export default App;
