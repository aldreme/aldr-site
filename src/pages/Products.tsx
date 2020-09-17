import React from 'react';
import './Products.css';

// the hook
import { useTranslation } from 'react-i18next';

import banner_img from '../assets/images/products/products-banner.jpg';

function Products() {
    const { t } = useTranslation();

    return (
        <div className="Products-layout">
            <div className="Products-banner">
                <img alt="" src={banner_img} className="Products-banner-img" />

                <div className="Products-banner-caption">
                    <p className="Products-banner-caption-h0">{t('PRODUCTS')}</p>
                </div>
            </div>
        </div>
    );
}

export default Products;