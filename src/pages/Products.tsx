import React from 'react';
import './Products.css';
import Jumbotron from 'react-bootstrap/esm/Jumbotron';
import Button from 'react-bootstrap/esm/Button';
import Carousel from '../components/Carousel';

function Products() {
    return (
        <div>
            <Carousel />
            
            <Jumbotron>
                <h1>Products</h1>
                <h2>This is a page with testing content, still under development</h2>
                <Carousel />
                <Carousel />
            </Jumbotron>

            <Jumbotron>
                <h1>Hey there.</h1>
                <Button size="lg">Explore</Button>
            </Jumbotron>

            <Jumbotron>
                <h1>Hey there.</h1>
                <Button size="lg">Explore</Button>
            </Jumbotron>
        </div>
    );
}

export default Products;