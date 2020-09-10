import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBarHome.css'

// the hook
import { useTranslation } from 'react-i18next';

import logo from '../assets/images/logo/logo-light.png';
import i18n_icon from '../assets/images/navbar/i18n_icon.svg';

function NavBarHome() {
    const cookies = new Cookies();

    const { t, i18n } = useTranslation();

    const [isScrollTop, setScrollTop] = useState(true)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollTopCheck = window.scrollY < 500
            if (scrollTopCheck !== isScrollTop) {
                setScrollTop(scrollTopCheck)
            }
        })
    })

    return (
        <NavBar className= {isScrollTop ? "NavBarHome-transparent" : "NavBarHome-solid"} collapseOnSelect expand="lg" variant="dark" fixed="top">
            <NavBar.Brand href="#home">
                <img alt="logo" src={logo} className="NavBarHome-logo"/>
            </NavBar.Brand>

            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            
            <NavBar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#home">{t('navbar-home')}</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#products">{t('navbar-products')}</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#about">{t('navbar-aboutus')}</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#career">{t('navbar-careers')}</Nav.Link>
                    <Nav.Link bsPrefix="NavBarHome-navlink" href="#contact">{t('navbar-contact')}</Nav.Link>
                </Nav>

                <Nav>
                    <img alt="i18n-icon" src={i18n_icon} className="NavBarHome-i18n_icon"/>
                    <NavDropdown title={t('navbar-languages')} id="collasible-nav-dropdown" className="NavBarHome-lang">
                        <NavDropdown.Item onClick={() => {i18n.changeLanguage('en_us'); cookies.set('language', 'en_us'); window.location.reload();}}>English</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {i18n.changeLanguage('zh_cn'); cookies.set('language', 'zh_cn'); window.location.reload();}}>简体中文</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );
  }
  
  export default NavBarHome;