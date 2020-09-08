import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

import bench01 from '../assets/images/stainless_steel_products/bench-01.jpg'
import bench02 from '../assets/images/stainless_steel_products/bench-02.jpg'

function NavBar() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="item-img">
                    <img
                        src={bench01}
                        alt="First slide"
                    />
                </div>
                
            </Carousel.Item>

            <Carousel.Item>
                <div className="item-img">
                    <img
                        src={bench02}
                        alt="Second slide"
                    />
                </div>
            </Carousel.Item>
            
        </Carousel>
    );
  }
  
  export default NavBar;