import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBarBase from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'universal-cookie';
import './NavBar.css';

import { useTranslation } from 'react-i18next';

import {
  NavLink,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import aboutPageBannerImg from '../assets/images/about/about-banner.jpg';
import contactPageBannerImg from '../assets/images/contact/contact-banner.jpg';
import homePageBannerImg from '../assets/images/home/home-banner-min.jpg';
import logo from '../assets/images/logo/logo-light.png';
import productsPageBannerImg from '../assets/images/products/products-banner.jpg';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Page from '../pages/Page';
import Products from '../pages/Products';

interface RouteData {
  path: string,
  name: string,
  pageBannerImage: string,
  Component: () => JSX.Element
}

function NavBar() {
  return (
    <Router>
      <AnimationApp />
    </Router>
  );
}

function RenderedRoutes({ routes }: { routes: RouteData[] }) {
  return (
    <>
      {routes.map(({ path, pageBannerImage, Component }) => (
        <Route key={path} exact path={path}>
          <Page bannerImage={pageBannerImage}>
            <Component />
          </Page>
        </Route>
      ))}
    </>
  )
}

function AnimationApp() {
  const cookies = new Cookies();

  const { t, i18n } = useTranslation();

  const [isScrollTop, setScrollTop] = useState(true)
  const [isNavExpanded, setNavExpanded] = useState(false)

  useEffect(() => {
    const scrollEventListener = () => {
      const scrollTopCheck = window.scrollY < 0.05 * window.innerHeight
      if (scrollTopCheck !== isScrollTop) {
        setScrollTop(scrollTopCheck)
      }
    }
    document.addEventListener("scroll", scrollEventListener);

    return () => {
      document.removeEventListener("scroll", scrollEventListener);
    };
  });

  const routes = [
    { path: '/', name: t('navbar-home'), pageBannerImage: homePageBannerImg, Component: Home },
    { path: '/products', name: t('navbar-products'), pageBannerImage: productsPageBannerImg, Component: Products },
    { path: '/about', name: t('navbar-aboutus'), pageBannerImage: aboutPageBannerImg, Component: About },
    { path: '/contact', name: t('navbar-contact'), pageBannerImage: contactPageBannerImg, Component: Contact },
  ] as RouteData[];

  function NavbarBrand() {
    return (
      <NavBarBase.Brand href="/">
        <img alt="logo" src={logo} className="NavBar-logo" />
      </NavBarBase.Brand>
    );
  }

  return (
    <div>
      <NavBarBase
        className={isScrollTop ? (isNavExpanded ? "NavBar-solid" : "NavBar-trans") : "NavBar-solid"}
        expand="lg"
        expanded={isNavExpanded}
        variant="dark"
        fixed="top"
        onSelect={() => {
          setNavExpanded(false);
        }}
      >
        <NavbarBrand />

        <NavBarBase.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setNavExpanded(!isNavExpanded);
          }}
        />

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
              <NavDropdown.Item
                onClick={() => {
                  i18n.changeLanguage('en_us'); cookies.set('language', 'en_us');
                }}
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  i18n.changeLanguage('zh_cn'); cookies.set('language', 'zh_cn');
                }}
              >
                简体中文
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavBarBase.Collapse>
      </NavBarBase>

      <RenderedRoutes routes={routes} />
    </div>
  )
}

export default NavBar;
