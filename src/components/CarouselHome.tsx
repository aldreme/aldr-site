import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

import bench01 from '../assets/images/stainless_steel_products/bench-01.jpg'

function CarouselHome() {
    const numbers = [0,1,2]
    const items = numbers.map((n) => 
        <Carousel.Item key={n}>
            <div className="item-img">
                <img
                    src={bench01}
                    alt="First slide"
                />
                
            </div>
        </Carousel.Item>
    )

    return (
        <Carousel>
            { items }
        </Carousel>
    );
  }
  
  export default CarouselHome;