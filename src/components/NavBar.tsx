import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import NavBarBase from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css'

// the hook
import { useTranslation } from 'react-i18next';

import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
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
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="*">
                    <AnimationApp/>
                </Route>
            </Switch>
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

    let location = useLocation();

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
                        <Nav.Link bsPrefix="NavBar-navlink" href="/home">{t('navbar-home')}</Nav.Link>
                        <Nav.Link bsPrefix="NavBar-navlink" href="/products">{t('navbar-products')}</Nav.Link>
                        <Nav.Link bsPrefix="NavBar-navlink" href="/about">{t('navbar-aboutus')}</Nav.Link>
                        <Nav.Link bsPrefix="NavBar-navlink" href="/careers">{t('navbar-careers')}</Nav.Link>
                        <Nav.Link bsPrefix="NavBar-navlink" href="/contact">{t('navbar-contact')}</Nav.Link>
                    </Nav>

                    <Nav>
                        <NavDropdown title={t('navbar-languages')} id="collasible-nav-dropdown" className="NavBar-lang">
                            <NavDropdown.Item onClick={() => {i18n.changeLanguage('en_us'); cookies.set('language', 'en_us'); }}>English</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {i18n.changeLanguage('zh_cn'); cookies.set('language', 'zh_cn'); }}>简体中文</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavBarBase.Collapse>
            </NavBarBase>
            
            <Switch location={location}>
                <Route exact path="/home" component = {Home}/>
                <Route path="/products" component = {Products}/>
                <Route path="/about" component = {About}/>
                <Route path="/careers" component = {Careers}/>
                <Route path="/contact" component = {Contact}/>
            </Switch>
        
        </div>
    )
  }
  
  export default NavBar;