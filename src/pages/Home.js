import * as React from "react";
import {Link} from "react-router-dom";

const Home = () => {
	const [color, setColor] = React.useState('black')
	React.useEffect(() => {
		setColor('red')
	},[])
	return (
	  <div className="mainBody">
		<main>
		  <h2>Welcome to the homepage!</h2>
		  <p style={{color: color}}>You can do this, I believe in you.</p>
		</main>
		<nav>
		  <Link to="/about">About</Link>
		</nav>
	  </div>
	);
  }

  export default Home;