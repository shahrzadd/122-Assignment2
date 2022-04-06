import * as React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

const logo = require('../assets/Club80s-2.png')

const Header = () => {
	return (
		<div className="header">
			<Navbar className="navWrapper">
				<Container fluid>
					<Navbar.Brand className="brand" href="">
						<img className="logo" src={logo} alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="navLinks">
							<Nav.Link href="/" className="link">
							WHAT WE DO
							</Nav.Link>
							<Nav.Link href="/about" className="link">
							WHO WE ARE
							</Nav.Link>
							<Nav.Link href="/main" className="link">
							HOW TO CONNECT
							</Nav.Link>
							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">
									Action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
