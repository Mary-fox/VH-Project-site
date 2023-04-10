import React from 'react';
import './PriceCard.scss';
import arrow  from '../../../assets/images/arrow-prices.svg';

function PriceCard (props) {
  return (
    <div className="price-card">
        <h2 className='price-card__title'>{props.title}</h2>
        <p className='price-card__text'>{props.text}</p>
        <a className='price-card__link' href={props.link}>
            <img src={arrow} alt="arrow btn"/>
           <span className='price-card__price'>{props.price}</span></a>  
    </div>
  );
};

export default PriceCard;