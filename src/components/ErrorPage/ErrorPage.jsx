import React, {useState} from 'react';
import Header from '../Header/Header';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';



function ErrorPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);

    return (
  <div className='page-wrapper'>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>

    <section className="error-page">
    <div className='error-page__left-banner'></div>
        <div className="error-page__container">
          <h1 className='error-page__title'>404</h1>
          <div className="error-page__content">
            <div className="error-page__info">
              <h2 className='error-page__subtitle'>Страница не найдена</h2>
              <p className='error-page__text'>Мы обязательно разберёмся с этим недоразумением, а пока вернитесь на главную страницу</p>
            </div>
            <Link className='error-page__btn' to="/">На главную</Link>
          </div>
        </div>
      <div className='error-page__right-banner'></div>

    </section>
  </div>

    );
  }
  
  export default ErrorPage;