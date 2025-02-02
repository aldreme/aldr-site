import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavbarBase from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'universal-cookie';
import './Navbar.css';

import i18nIcon from '../assets/images/navbar/i18n_icon.svg';

import { useTranslation } from 'react-i18next';

import {
  NavLink,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import { Container } from 'react-bootstrap';
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

function Navbar() {
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

function NavbarBrand() {
  return (
    <NavbarBase.Brand href="/">
      <img alt="logo" src={logo} className="Navbar-logo" />
    </NavbarBase.Brand>
  );
}

function NavbarLinks({ routes }: { routes: RouteData[] }) {
  const cookies = new Cookies();
  const { i18n } = useTranslation();

  return (
    <NavbarBase.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        {routes.map(route => (
          <NavLink
            className='Navbar-navlink'
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
        <NavDropdown
          title={<img alt='i18n-icon' src={i18nIcon} />}
          id="collasible-nav-dropdown"
          className='px-5 mx-1'
        >
          <NavDropdown.Item
            onClick={() => {
              i18n.changeLanguage('en_us'); cookies.set('language', 'en_us');
            }}
            className='d-flex justify-content-center'
          >
            English
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              i18n.changeLanguage('zh_cn'); cookies.set('language', 'zh_cn');
            }}
            className='d-flex justify-content-center'
          >
            简体中文
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </NavbarBase.Collapse>
  )
}

function AnimationApp() {
  const { t } = useTranslation();

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

  return (
    <div>
      <NavbarBase
        className={isScrollTop ? (isNavExpanded ? "Navbar-solid" : "Navbar-trans") : "Navbar-solid"}
        expand="lg"
        expanded={isNavExpanded}
        variant="dark"
        fixed="top"
        onSelect={() => {
          setNavExpanded(false);
        }}
      >
        <Container fluid>
          <NavbarBrand />

          <NavbarBase.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              setNavExpanded(!isNavExpanded);
            }}
          />

          <NavbarLinks routes={routes} />
        </Container>

      </NavbarBase>

      <RenderedRoutes routes={routes} />
    </div>
  )
}

export default Navbar;
