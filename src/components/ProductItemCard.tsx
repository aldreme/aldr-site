import React from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useTranslation } from 'react-i18next';
import "./ProductItemCard.css";

export interface ProductItemProps {
  id: number,
  name: string,
  img: string
};

export function ProductItemCard(props: ProductItemProps) {
  const { name, img } = props;
  const { t } = useTranslation();

  return (
    <div className='ProductItemCard'>
      <div className='ProductItemCard-img-container'>
        <img alt='product-item' src={require(`../assets/images/products/stainless_steel/${img}`)} />
      </div>
      <p>{t(name)}</p>
    </div>
  );
}

export function ProductItemCardPlaceholder() {
  const ImgPlaceholder = () => {
    return (
      <Card.Img variant='top' height={200} />
    )
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Placeholder as={ImgPlaceholder} animation='glow' />
      <Card.Body>
        <Placeholder as={Card.Title} animation="wave">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="wave">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={10} />
      </Card.Body>
    </Card>

  )
}
