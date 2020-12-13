import React from 'react';
import './Contact.css'

// the hook
import { useTranslation } from 'react-i18next';
import Map from '../components/Map';

import banner_img from '../assets/images/contact/contact-banner.jpg';
import db from '../assets/data/db.json'

function Contact() {
    const { t } = useTranslation();
    const contact_info = db.contact_info;
    
    return (
        <div className='Contact-layout'>
            <div className='Contact-banner noselect'>
                <div className='Contact-banner-img'>
                    <img alt='' src={banner_img}/>
                </div>

                <div className='Contact-banner-caption'>
                    <p className='Contact-banner-caption-h0'>{t('CONTACT US')}</p>
                </div>
            </div>

            <div className='Contact-info'>
                <div className='Contact-details'>
                    <div style={{display:'flex', flexDirection: 'row'}}>
                        <p style={{textAlign: 'left', minWidth: '15vmin'}}>{t('telephone')}: </p>
                        <div style={{marginLeft: '1vmin', display:'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                            <p>{contact_info.tel_cn}</p>
                            <p>{contact_info.tel_us}</p>
                        </div>
                    </div>
                    
                    <div style={{display:'flex', flexDirection: 'row'}}>
                        <p style={{textAlign: 'left', minWidth: '15vmin'}}>{t('email')}: </p>
                        <a style={{color: 'white', marginLeft: '1vmin'}} href='mailto:sales@aldreme.com'>
                            sales@aldreme.com
                        </a>
                    </div>
                    <div style={{display:'flex', flexDirection: 'row'}}>
                        <p style={{textAlign: 'left', minWidth: '15vmin'}}>{t('address')}: </p>
                        <p style={{marginLeft: '1vmin'}}>{t(contact_info.address)}</p>
                    </div>
                    <div className='Contact-slogan'>
                        <p>{t('home-banner-caption0')}</p>
                        <p>{t('home-banner-caption1')}</p>
                        <p>{t('home-banner-caption2')}</p>
                    </div>
                    
                </div>
                <div className='Contact-map'>
                    <Map />
                </div>
            </div>
            
        </div>
    );
}

export default Contact;