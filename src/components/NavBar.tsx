import React from 'react';
import BSNavBar from 'react-bootstrap/Navbar';
import BSNav from 'react-bootstrap/Nav';
import logo_dark from '../assets/images/logo/logo-dark.svg';
import './NavBar.css'

function NavBar() {
    return (
        <BSNavBar bg="light" variant="light" sticky="top">
            <BSNavBar.Brand href="#home">
                <img src={logo_dark} className="NavBar-logo"/>
            </BSNavBar.Brand>
            
            <BSNav className="mr-auto">
                <BSNav.Link href="#home">Home</BSNav.Link>
                <BSNav.Link href="#products">Products</BSNav.Link>
                <BSNav.Link href="#about">About</BSNav.Link>
                <BSNav.Link href="#contact">Contact</BSNav.Link>
            </BSNav>
        </BSNavBar>
    );
  }
  
  export default NavBar;