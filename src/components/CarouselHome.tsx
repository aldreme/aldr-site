import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

import db from '../assets/data/db.json';

function CarouselHome() {
    const product_img_dir = "../assets/images/products/stainless_steel/";
    const products = db.products.stainless_steel.map( item => 
        <Carousel.Item key={item.name}>
            <div className="item-img">
                <img
                    src= {require("../assets/images/products/stainless_steel/" + item.images[0])}
                    alt="First slide"
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