import React, {useState} from 'react';
import Header from '../Header/Header';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';



function ErrorPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);

    return (
  <div className='page-wrapper'>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>

    <section className="error">
    <div className='error__left-banner'></div>
        <div className="error__container">
          <h1 className='error__title'>404</h1>
          <div className="error__content">
            <div className="error__info">
              <h2 className='error__subtitle'>Страница не найдена</h2>
              <p className='error__text'>Мы обязательно разберёмся с этим недоразумением, а пока вернитесь на главную страницу</p>
            </div>
            <Link className='error__btn' to="/">На главную</Link>
          </div>
        </div>
      <div className='error__right-banner'></div>

    </section>
  </div>

    );
  }
  
  export default ErrorPage;