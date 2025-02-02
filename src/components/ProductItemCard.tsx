import React from 'react';
import { useTranslation } from 'react-i18next';
import "./ProductItemCard.css";

export interface ProductItemProps {
	id: number,
	name: string,
	img: string
};

export function ProductItemCard(props: ProductItemProps) {
	const {name, img} = props;
	const { t } = useTranslation();

	return (
		<div className='ProductItemCard'>
			<div className='ProductItemCard-img-container'>
				<img alt='' src={require(`../assets/images/products/stainless_steel/${img}`)}/>
			</div>
			<p>{t(name)}</p>
		</div>
	);
}