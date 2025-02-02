import React from 'react';
import { useTranslation } from 'react-i18next';
import Partners from '../components/Partners';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home-layout">
      <div className="Home-banner-caption">
        <p className="Home-banner-caption-h0">{t('home-banner-caption0')}</p>
        <p className="Home-banner-caption-h1">{t('home-banner-caption1')}</p>
        <p className="Home-banner-caption-h2">{t('home-banner-caption2')}</p>
      </div>

      <div className="Home-partners">
        <p className="Home-partners-caption">{t("Our Partners")}</p>
        <Partners />
      </div>
    </div>
  );

}

export default Home;
