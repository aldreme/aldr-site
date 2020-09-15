import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import NavBarBase from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css'

// the hook
import { useTranslation } from 'react-i18next';

import {
    HashRouter as Router,
    NavLink,
    Route,
    useLocation
} from 'react-router-dom';

import logo from '../assets/images/logo/logo-light.png';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import Products from '../pages/Products';

function NavBar() {
    return (
        <Router>
            <AnimationApp/>
        </Router>
    );
  }

  function AnimationApp() {
    const cookies = new Cookies();

    const { t, i18n } = useTranslation();

    const [isScrollTop, setScrollTop] = useState(true)
    const [isNavToggled, setNavToggled] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollTopCheck = window.scrollY < 0.1 * window.innerHeight
            if (scrollTopCheck !== isScrollTop) {
                setScrollTop(scrollTopCheck)
            }
        });
    });

    return (
        <div>
            <NavBarBase className= {isScrollTop ? (isNavToggled ? "NavBar-solid" : "NavBar-transparent") : "NavBar-solid"} collapseOnSelect expand="lg" variant="dark" fixed="top">
                <NavBarBase.Brand href="/">
                    <img alt="logo" src={logo} className="NavBar-logo"/>
                </NavBarBase.Brand>

                <NavBarBase.Toggle aria-controls="responsive-navbar-nav" onClick={() => {
                    setNavToggled(!isNavToggled)
                }} />
                
                <NavBarBase.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="NavBar-navlink" to="/">{t('navbar-home')}</NavLink>
                        <NavLink className="NavBar-navlink" to="/products">{t('navbar-products')}</NavLink>
                        <NavLink className="NavBar-navlink" to="/about">{t('navbar-aboutus')}</NavLink>
                        <NavLink className="NavBar-navlink" to="/careers">{t('navbar-careers')}</NavLink>
                        <NavLink className="NavBar-navlink" to="/contact">{t('navbar-contact')}</NavLink>
                    </Nav>

                    <Nav>
                        <NavDropdown title={t('navbar-languages')} id="collasible-nav-dropdown" className="NavBar-lang">
                            <NavDropdown.Item onClick={() => {i18n.changeLanguage('en_us'); cookies.set('language', 'en_us'); }}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {i18n.changeLanguage('zh_cn'); cookies.set('language', 'zh_cn'); }}>简体中文</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavBarBase.Collapse>
            </NavBarBase>
            
            <div>
                <Route exact path="/" component = {Home}/>
                <Route path="/products" component = {Products}/>
                <Route path="/about" component = {About}/>
                <Route path="/careers" component = {Careers}/>
                <Route path="/contact" component = {Contact}/>
            </div>
        </div>
    )
  }
  
  export default NavBar;