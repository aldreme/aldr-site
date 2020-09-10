import React from 'react';
import './Home.css';

// the hook
import { useTranslation } from 'react-i18next';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import CarouseHome from '../components/CarouselHome';

import banner_img from '../assets/images/home/home-banner-min.jpg';


function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <img alt="" src={banner_img} className="Home-banner-img" />
                <div className="Home-banner-caption">
                    <p className="Home-banner-caption-h1">{t('home-banner-caption1')}</p>
                    <p className="Home-banner-caption-h2">{t('home-banner-caption2')}</p>

                    <p className="Home-banner-caption-btn"> 
                        <Button variant="outline-light" size="lg" block>{t('home-banner-btn-learn-more')}</Button>
                    </p>
                </div>
            </div>

            <Jumbotron>
                <h1>Hey there.</h1>
                <Button size="lg">Explore</Button>
            </Jumbotron>
            
            <CarouseHome />
        </div>
    );
    
}

export default Home;