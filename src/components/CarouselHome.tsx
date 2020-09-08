import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

import bench01 from '../assets/images/stainless_steel_products/bench-01.jpg'
import bench02 from '../assets/images/stainless_steel_products/bench-02.jpg'

function NavBar() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="CarouselHome-image"
                    src={bench01}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="CarouselHome-image"
                    src={bench02}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
  
  export default NavBar;