import React from 'react';
import './Page.css';

interface PageProps {
  children: React.ReactNode,
  bannerImage: string,
}

export default function Page(props: PageProps) {
  return (
    <div className='page'>
      <img alt='page-banner' src={props.bannerImage} className='page-banner-img' />

      {props.children}
    </div>
  )
}
