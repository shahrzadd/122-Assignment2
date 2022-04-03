import * as React from "react";
import {Link} from "react-router-dom";
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../App.css";

const Header = () => {
	return (
		<div className='header'>
			<Navbar bg="dark" expand="lg" variant="dark" fixed="top" collapseOnSelect>
				<Container>
					<Navbar.Brand href="">Project 2</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="">
								<Link to="/">Home</Link>
							</Nav.Link>
							<Nav.Link href="">
								<Link to="/about">About</Link>
							</Nav.Link>
							<Nav.Link href="">
								<Link to="/main">Main</Link>
							</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
