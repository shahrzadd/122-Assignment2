import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";

import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRoutes() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="main" element={<Main />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default AppRoutes;
