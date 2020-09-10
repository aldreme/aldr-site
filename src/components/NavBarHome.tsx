import React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBarHome.css'

import logo from '../assets/images/logo/logo-light.png';

function NavBarHome() {
    return (
        <NavBar className="NavBarHome" collapseOnSelect expand="lg" variant="dark" fixed="top">
            <NavBar.Brand href="#home">
                <img alt="logo" src={logo} className="NavBarHome-logo"/>
            </NavBar.Brand>

            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            
            <NavBar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#home">HOME</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#products">PRODUCTS</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#about">ABOUT US</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#career">CAREERS</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#contact">CONTACT</Nav.Link>
                </Nav>

                <Nav>
                <NavDropdown title="LANGUAGES" id="collasible-nav-dropdown" className="NavBarHome-lang">
                    <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">简体中文</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );
  }
  
  export default NavBarHome;