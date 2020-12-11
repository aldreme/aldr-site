import React from 'react';
import './Contact.css'

// the hook
import { useTranslation } from 'react-i18next';

import banner_img from '../assets/images/contact/contact-banner.jpg';

function Contact() {
    const { t } = useTranslation();
    
    return (
        <div className='Contact-layout noselect'>
            <div className='Contact-banner'>
                <div className='Contact-banner-img'>
                    <img alt='' src={banner_img}/>
                </div>

                <div className='Contact-banner-caption'>
                    <p className='Contact-banner-caption-h0'>{t('CONTACT US')}</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;