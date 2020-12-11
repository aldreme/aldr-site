import React from 'react';
import './Careers.css'

// the hook
import { useTranslation } from 'react-i18next';

import banner_img from '../assets/images/careers/careers-banner.jpg';

function Careers() {
    const { t } = useTranslation();

    return (
        <div className='Careers-layout noselect'>
            <div className='Careers-banner'>
                <div className='Careers-banner-img'>
                    <img alt="" src={banner_img}/>
                </div>

                <div className='Careers-banner-caption'>
                    <p className='Careers-banner-caption-h0'>{t('CAREERS')}</p>
                </div>
            </div>
        </div>
    );
}

export default Careers;