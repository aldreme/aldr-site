import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

import db from '../assets/data/db.json';
import {shuffleArray} from '../util/misc';

function CarouselHome() {
    shuffleArray(db.products.stainless_steel)
    const products = db.products.stainless_steel.slice(0, 10).map( item => 
        <Carousel.Item key={item.name}>
            <div className="item-img">
                <img
                    src= {require("../assets/images/products/stainless_steel/" + item.images[0])}
                    alt= {item.name}
                />
                
            </div>
        </Carousel.Item>
    )

    return (
        <Carousel>
            { products }
        </Carousel>
    );
  }
  
  export default CarouselHome;