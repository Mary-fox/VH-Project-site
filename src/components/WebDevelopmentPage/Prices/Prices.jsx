import React from 'react';
import './Prices.scss';
import PriceCard from '../PriceCard/PriceCard';


function Prices ( ) {
  return (
  <section className='prices'>
    <div className="prices__left-banner"></div>
        <div className="ptices__container">
            <div className="prices__title-block">
            <h1 className='prices__title'>Специализации</h1>
            <p className='prices__text'>Здесь несколько наших проектов проектов из последних, для удобства вы можете перейти на страницу проекты и воспользоваться фильтрами</p>
            </div>

            <div className="prices__content">
                <PriceCard 
                    title="Веб-дизайн и разработка сайтов"
                    text={["Дизайн решения для веб-сайтов, разработка полного цикла. Мы предпочитаем использоваться Российские платформы", <span> Тильда </span>, "и",<span> 1сБитрикс</span>]}
                    price="От 50 000 ₽"/>
                <PriceCard 
                    title="Мобильные приложения"
                    text="Разработка мобильных приложений от идеи до реализации, поможем сформировать и воплотить идею вашего стартапа."
                    price="От 100 000 ₽"/>
                <PriceCard 
                    title="Digital -Иллюстрации"
                    text="2D контент любого уровня на заказ"
                    price="От 5 000 ₽"/>
                <PriceCard 
                    title="Готовые решения"
                    text="Интернет-каталог готовых премиум шаблонов на разные тематики для платформы Тильда. Отличный вариант если вам нужен сайт быстро."
                    price="От 900 ₽"/>
                <PriceCard 
                    title="Наши продукты"
                    text="Сейчас мы работаем над собственным приложением и мультфильмами, следите за нами в телеграмм или вконтакте, чтобы быть вкурсе."
                    price="Смотреть"/>
                <PriceCard 
                    title="Digital- Маркетинг"
                    text="Продвижение ваших продуктов в сети"
                    price="От 5 000 ₽"/>
            </div>
        </div>


    <div className="prices__right-banner"></div>
  </section>

  );
};

export default Prices;