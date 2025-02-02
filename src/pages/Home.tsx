import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import bannerImg from '../assets/images/home/home-banner-min.jpg';
import Partners from '../components/Partners';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home-layout noselect">
      <div className="Home-banner">
        <img alt="" src={bannerImg} className="Home-banner-img" />
        <div className="Home-banner-caption">
          <p className="Home-banner-caption-h0">{t('home-banner-caption0')}</p>
          <p className="Home-banner-caption-h1">{t('home-banner-caption1')}</p>
          <p className="Home-banner-caption-h2">{t('home-banner-caption2')}</p>
          
          <p className="Home-banner-caption-btn">
            <LinkContainer to='/products'>
              <Button variant="outline-light" size="lg" block>
                {t('home-banner-btn-learn-more')}
              </Button>
            </LinkContainer>
          </p>
        </div>
      </div>

      <div className="Home-partners">
        <p className="Home-partners-caption">{t("Our Partners")}</p>
        <Partners />
      </div>
    </div>
  );
  
}

export default Home;