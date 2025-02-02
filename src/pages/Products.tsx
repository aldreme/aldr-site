import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import db from '../assets/data/db.json';
import bannerImg from '../assets/images/products/products-banner.jpg';
import { ProductItemCard } from '../components/ProductItemCard';
import './Products.css';

function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (products.length > 0) return;
    setTimeout(() => {
      const productsData = db.products.stainless_steel.sort((n1, n2) => {
        return n1.name > n2.name ? 1 : n1.name === n2.name ? 0 : -1;
      });

      let id = 0;
      const prods = productsData.map(item => {
        return <ProductItemCard key={++id} id={++id} name={item.name} img={item.images[0]}/>;
      });
      setProducts(prods);
    }, 1000);
  });

  return (
    <div className='Products-layout'>
      <div className='Products-banner'>
        <div className='Products-banner-img'>
          <img alt="" src={bannerImg} />
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