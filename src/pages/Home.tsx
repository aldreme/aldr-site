import React, {useRef, useEffect} from 'react';
import Rellax from 'rellax';
import './Home.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import CarouseHome from '../components/CarouselHome';

import banner_img from '../assets/images/home/home-banner-min.jpg';


function Home() {
    useEffect(() => {
        new Rellax(".rellax", {
        });
    });

    return (
        <div>
            <div className="Home-banner rellax" data-rellax-speed="1">
                <img alt="" src={banner_img} className="Home-banner-img" />
                <div className="Home-banner-caption">
                    <p className="Home-banner-caption-h1">Design, Manufacture, Polish, Deliver</p>
                    <p className="Home-banner-caption-h2">High-quality Stainless Steel Products</p>

                    <p className="Home-banner-caption-btn"> 
                        <Button variant="outline-light" size="lg" block>Learn more</Button>
                    </p>
                </div>
            </div>

            <div className="Home-body rellax" data-rellax-speed="5">
                <CarouseHome />
            </div>
        </div>
    );
    
}

export default Home;