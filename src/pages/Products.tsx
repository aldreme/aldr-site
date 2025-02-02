import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import db from '../assets/data/db.json';
import { ProductItemCard, ProductItemCardPlaceholder } from '../components/ProductItemCard';
import './Products.css';

interface Product {
  name: string;
  category: string;
  tag: string;
  price: number;
  images: string[];
  description: string;
  specs: {
    dimension: {
      width: number;
      height: number;
      length: number;
    };
    weight: number;
    material: string;
    technology: string;
  };
}

function ProductCardsGrid({ products }: { products: Product[] }) {
  return (
    <div className='Products-grid-layout'>
      {
        products.map((item: Product, index) => {
          return (
            <ProductItemCard
              key={item.name}
              id={index}
              name={item.name}
              img={item.images[0]}
            />
          )
        })
      }
    </div>
  )
}

function Products() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) return;

    const productsData = db.products.stainless_steel.sort((n1, n2) => {
      return n1.name > n2.name ? 1 : n1.name === n2.name ? 0 : -1;
    }) as Product[];

    setProducts(productsData);
  }, [products.length]);

  return (
    <div className='Products-layout'>
      <div className='Products-banner-caption'>
        <p className='Products-banner-caption-h0'>{t('PRODUCTS')}</p>
      </div>

      {
        products.length === 0 ?
          <ProductItemCardPlaceholder />
          :
          <ProductCardsGrid products={products} />
      }
    </div>
  );
}

export default Products;
