import React from 'react';
import './Home.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import CarouseHome from '../components/CarouselHome';

function Home() {
    return (
        <div className="Home">
            <div>
                <div className="Home-banner" />
                <div className="Home-banner-caption">
                    <p className="Home-banner-caption-h1">Design, Manufacture, Polish, Deliver</p>
                    <p className="Home-banner-caption-h2">High-quality Stainless Steel Products</p>

                    <p className="Home-banner-caption-btn"> 
                        <Button variant="outline-light" size="lg" block>Learn more</Button>
                    </p>
                </div>
            </div>
            
        
            <Jumbotron>
                <h1>TO DO</h1>
            </Jumbotron>

            <CarouseHome />
        </div>
        
    );
}

export default Home;