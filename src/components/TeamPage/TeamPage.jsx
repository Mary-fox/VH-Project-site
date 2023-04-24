import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './TeamPage.scss';
import SliderBlock from './SliderBlock/SliderBlock';
import ReviewSlider from './ReviewSlider/ReviewSlider';
import { reviews } from '../../datas/reviews';

function TeamPage() {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    return (
    <div>
    <Header isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
        <div id={"top"}></div>
        <section className="team">
            <div className='team__left-banner'>
            <h3> VH PROJECT</h3>
            </div>
                <div className="team__subheader">
                    <Breadcrumbs
                            items={[
                                {label: 'Главная', url: '/' },
                                {label: 'Команда', url: '#!' },
                                ]}/>
                <div className="team__title-block">
                    <h1 className='team__title'>КОМАНДА</h1>
                    <p className='team__subtext'>Мы - единомышленники, которые стремятся создавать уникальные и функциональные продукты на основе аналитики, данных из метрик и исследовании пользовательского опыта.</p>
                    <button  className="team__btn">Присоединиться</button>    
                </div>
                </div>
            <div className='team__right-banner'></div>
            <div className='team__left-banner'>
            <h3>Принципы</h3>
            </div>
                <div className='team__content'>
                    <div className="team__purpose">
                        <h2 className='team__subtitle'>Наша цель</h2>
                        <p className='team__text team__text_wide'>Текст про цель Во многих сферах мы уже разрабатывали продукты и уверенны, что сможем добиться в них еще большего результата. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="team__principles">
                        <h2 className='team__subtitle'>Принципы</h2>
                    </div>
                    <div className="team__big-block team__big-block_info">
                        <div className='team__principle'>
                            <h2 className='team__subtitle'>Сотрудничество</h2>
                            <p className='team__text team__text_small'>Не бросаем своих клиентов на пол пути, всегда рассчитываем на долгосрочное сотрудничество.</p>
                        </div>
                        <div className='team__principle'>
                            <h2 className='team__subtitle'>Ответственность</h2>
                            <p className='team__text team__text_small'>Всегда четко выполняем свои обязательства.</p>
                        </div>
                        <div className='team__principle'>
                            <h2 className='team__subtitle'>Вовлеченность</h2>
                            <p className='team__text team__text_small'>Заинтересованны в создании сильных продуктов.</p>
                        </div>
                    </div>
                </div>
            <div className='team__right-banner'></div>
            <div className='team__left-banner'>
                <h3>Цифры</h3>
            </div>
                <div className='team__content'>
                    <div className='team__little-block team__little-block_about'>
                        <h2 className='team__subtitle'>О нас в цифрах</h2>
                        <p className='team__text'>Наша команда существует менее года, не смотря на это мы уже добились колоссальных успехов в сфере веб-разработки и дизайна</p>
                    </div>
                    <div className='team__about_info'>
                        <div className="team__about_numbers">                            
                            <h2 className='team__number'>10+</h2>
                            <p className='team__text team__text_center'>Экспертов <br/> в нашей команде</p>
                        </div>
                        <div className="team__about_numbers">
                            <h2 className='team__number'>100+</h2>
                            <p className='team__text team__text_center'>Проектов  <br/> реализовано</p>
                        </div>
                         <div className="team__about_numbers">
                            <h2 className='team__number'>5+ лет</h2>
                            <p className='team__text team__text_center'>Средний  коммерческий <br/> опыт специалистов</p>
                        </div>
                    </div>
                    <div className='team__little-block team__little-block_schemes'>
                        <h2 className='team__subtitle'> Схемы сотрудничества</h2>
                        <p className='team__text'>Придерживаемся партнёрских и долгосрочных отношений со своими клиентами и работаем на результат</p>
                    </div>
                    <div className="team__big-block team__big-block_schemes">
                        <div className='team__sheme'>
                            <h2 className='team__subtitle'>FIX PRICE</h2>
                            <p className='team__text team__text_narrow'>Для задач с предсказуемым сроком и бюджетом.</p>
                        </div>
                        <div className='team__sheme'>
                            <h2 className='team__subtitle '>TIME & MATERIALS</h2>
                            <p className='team__text team__text_narrow'>Для длинных и сложных проектов с гибким планированием.</p>
                        </div>
                        <div className='team__sheme'>
                            <h2 className='team__subtitle'>RETENTION</h2>
                            <p className='team__text team__text_narrow'>Выделенная команда на определенный срок по зафиксированной цене.</p>
                        </div>
                    </div>
                    <div className="team__little-block team__little-block_title">
                        <h2 className='team__subtitle'>Наша команда</h2>
                    </div>
                    <div className="team__little-block team__little-block_text">
                        <p className='team__text'> Мы работаем с достаточно крупным количеством цифровых направлений, но все они являются смежными, поэтому мы набираемся опыта и совмещаем его.</p>
                    </div>

                </div>
            <div className='team__right-banner'></div>
            </section>
        <SliderBlock />
        <section className='reviews'>
            <div className='reviews__left-banner'></div>
                <div className="reviews__container">
                    <div className="reviews__title-block">
                        <h2 className='reviews__subtitle'>Что говорят о нас</h2>
                    </div>
                    <div className="reviews__content">
                    <ReviewSlider reviews={reviews} />
                    </div>

                </div>
            <div className='reviews__right-banner'></div>
        </section>


       
    <Footer  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
    text="Расскажите о вашем проекте"
    subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
    btn="Написать"
    key="services"
    />
    </div>
    );
  }
  
  export default TeamPage;
  