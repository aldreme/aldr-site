import React from 'react';
import './About.css';

// the hook
import { useTranslation } from 'react-i18next';

import banner_img from '../assets/images/about/about-banner.jpg';

function About() {
    const { t } = useTranslation();

    return (
        <div className="About-layout noselect">
            <div className="About-banner">
                <img alt="" src={banner_img} className="About-banner-img" />

                <div className="About-banner-caption">
                    <p className="About-banner-caption-h0">{t('ABOUT US')}</p>
                </div>
            </div>
        </div>
    );
}

export default About;