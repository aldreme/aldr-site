import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import NavBarBase from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CSSTransition} from 'react-transition-group';
import './NavBar.css'

// the hook
import { useTranslation } from 'react-i18next';

import {
    BrowserRouter as Router,
    NavLink,
    Route
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

    const routes = [
        { path: '/', name: t('navbar-home'), Component: Home },
        { path: '/products', name: t('navbar-products'), Component: Products },
        { path: '/about', name: t('navbar-aboutus'), Component: About },
        { path: '/careers', name: t('navbar-careers'), Component: Careers },
        { path: '/contact', name: t('navbar-contact'), Component: Contact },
    ];

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
                        {routes.map(route => (
                            <NavLink
                                className='NavBar-navlink'
                                key={route.path}
                                to={route.path}
                                activeClassName="active"
                                exact
                            >
                                {route.name}
                            </NavLink>
                        ))}
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
                {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                    <CSSTransition
                        in={match != null}
                        timeout={500}
                        classNames='page'
                        unmountOnExit
                    >
                        <div className='page'>
                            <Component />
                        </div>
                    </CSSTransition>
                    )}
                </Route>
                ))}
            </div>
        </div>
    )
  }
  
  export default NavBar;