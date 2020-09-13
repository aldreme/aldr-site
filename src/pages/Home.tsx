import React from 'react';
import './Home.css';

// the hook
import { useTranslation } from 'react-i18next';

import Button from 'react-bootstrap/Button';

import Carousel from '../components/Carousel';

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

            <div className="Home-partners">
                <p className="Home-partners-caption">{t("Our Partners")}</p>
            </div>
            
            <Carousel />
        </div>
    );
    
}

export default Home;