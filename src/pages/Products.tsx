import React, {useState, useEffect} from 'react';
import './Products.css';
import {ProductItemCard} from '../components/ProductItemCard';

// the hook
import { useTranslation } from 'react-i18next';

import banner_img from '../assets/images/products/products-banner.jpg';
import db from '../assets/data/db.json';

function Products() {
    const { t } = useTranslation();
    const [products, setProducts] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (products.length > 0) return;
        setTimeout(() => {
            const products_data = db.products.stainless_steel.sort((n1, n2) => {
                return n1.name > n2.name ? 1 : n1.name === n2.name ? 0 : -1;
            });

            let id = 0;
            const prods = products_data.map(item => {
                return <ProductItemCard id={++id} name={item.name} img={item.images[0]}/>;
            });
            setProducts(prods);
        }, 1000);
    }, [products.length]);

    return (
        <div className='Products-layout'>
            <div className='Products-banner'>
                <div className='Products-banner-img'>
                    <img alt="" src={banner_img} />
                </div>

                <div className='Products-banner-caption'>
                    <p className='Products-banner-caption-h0'>{t('PRODUCTS')}</p>
                </div>
            </div>

            <div className='Products-grid-layout'>
                {products}
            </div>
        </div>
    );
}

export default Products;