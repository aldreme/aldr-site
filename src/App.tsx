import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarHome from './components/NavBarHome';
import CarouseHome from './components/CarouselHome';

function App() {
  return (
    <div className="App">

      <NavBarHome/>

      <Jumbotron>
        <h1>Suzhou ALDR LLC.</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <CarouseHome/>
      
    </div>
  );
}

export default App;
