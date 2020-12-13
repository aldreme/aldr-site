import React from 'react';
import "./ProductItemCard.css";
import { useTranslation } from 'react-i18next';

export interface ProductItemProps {
    id: number,
    name: string,
    img: string
};

export function ProductItemCard(props: ProductItemProps) {
    const {id, name, img} = props;
    const { t } = useTranslation();

    return (
        <div className='ProductItemCard' style={{animationDelay: `${0.1 * id}s`}}>
            <div className='ProductItemCard-img-container'>
                <img alt='' src={require(`../assets/images/products/stainless_steel/${img}`)}/>
            </div>
            <p>{t(name)}</p>
        </div>
    );
}