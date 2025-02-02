import React from 'react';
import './About.css';

import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className='About-layout'>
      <div className='About-banner-caption'>
        <p className='About-banner-caption-h0'>{t('ABOUT US')}</p>
      </div>

      <div className='About-content'>
        <p>{t('about-us')}</p>
      </div>
    </div>
  );
}

export default About;
