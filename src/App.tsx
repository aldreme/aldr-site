import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarHome from './components/NavBarHome';
import CarouseHome from './components/CarouselHome';
import FooterHome from './components/FooterHome';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">

      <NavBarHome />

      <Jumbotron>
        <h1>Design, Manufacture, Polish, Deliver</h1>
        <h2>High-quality Stainless Steel Products</h2>
        <p>
          <Button variant="primary" size="lg">Learn more</Button>
        </p>
      </Jumbotron>

      <CarouseHome />

      <FooterHome />
      
    </div>
  );
}

export default App;
