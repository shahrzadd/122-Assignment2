import * as React from "react";
import {Link} from "react-router-dom";

const Main = () => {
	return (
		<div className="mainBody">
			<main>
				<h2>Welcome to the MainPage!</h2>
				{/* <p>You can do this, I believe in you.</p> */}
			</main>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</div>
	);
};

export default Main;
