import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBarHome.css'

import logo_dark from '../assets/images/logo/logo-dark.svg';
import About from '../pages/About';

function NavBarHome() {
    return (
        <NavBar bg="light" variant="light" sticky="top">
            <NavBar.Brand href="#home">
                <img src={logo_dark} className="NavBarHome-logo"/>
            </NavBar.Brand>
            
            <Nav className="mr-auto">
                <Nav.Link className="NavBarHome-navlink" href="#home">Home</Nav.Link>
                <Nav.Link className="NavBarHome-navlink" href="#products">Products</Nav.Link>
                <Nav.Link className="NavBarHome-navlink" href="#about">About</Nav.Link>
                <Nav.Link className="NavBarHome-navlink" href="#contact">Contact</Nav.Link>
            </Nav>
        </NavBar>
    );
  }
  
  export default NavBarHome;