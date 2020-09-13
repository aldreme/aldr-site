import React from 'react';
import CarouselBase from 'react-bootstrap/Carousel';
import './Carousel.css'

import db from '../assets/data/db.json';
import {shuffleArray} from '../util/misc';

function Carousel() {
    shuffleArray(db.products.stainless_steel)
    const products = db.products.stainless_steel.slice(0, 10).map( item => 
        <CarouselBase.Item key={item.name}>
            <div className="item-img">
                <img
                    src= {require("../assets/images/products/stainless_steel/" + item.images[0])}
                    alt= {item.name}
                />
            </div>
        </CarouselBase.Item>
    )

    return (
        <CarouselBase>
            { products }
        </CarouselBase>
    );
}
  
export default Carousel;