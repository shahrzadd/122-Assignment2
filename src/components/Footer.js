import * as React from "react";
import {Nav} from "react-bootstrap";

const sideBanner = require("../assets/Club80s-1.png");

const Footer = () => {
	return (
		<div className="footer">
			<div className="footerSec leftSide">
				<img className="footerImg" src={sideBanner} alt="side banner" />
			</div>
			<div className="footerSec midFooter">
				<Nav>
					<Nav.Link href="/" className="link">
						WHAT WE DO
					</Nav.Link>
					<Nav.Link href="/about" className="link">
						WHO WE ARE
					</Nav.Link>
					<Nav.Link href="/main" className="link">
						HOW TO CONNECT
					</Nav.Link>
				</Nav>
			</div>
			<div className="footerSec rightSide" />
		</div>
	);
};

export default Footer;
