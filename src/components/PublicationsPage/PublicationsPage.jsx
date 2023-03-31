import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './PublicationsPage.scss';
import PublicationCard from '../PublicationCard/PublicationCard';
import { HashLink as Link } from 'react-router-hash-link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PublicationsTypeFilter from './PublicationsTypeFilter/PublicationsTypeFilter';
import { articles } from '../../datas/articles';



function PublicationsPage( ) {
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    return (
    <>
    <Header  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}/>
    <div className='wrapper'>
    <section className="publications-page">
        <div className="publications-page__left-banner">
        <h3>Публикации</h3>
        </div>
            <div className='publications-page__container'>
                <div className='publications-page__main-block'>
                <Breadcrumbs
                            items={[
                                {label: 'Главная', url: '/' },
                                {label: 'Публикации', url: '/publications' },
                                ]}/>
                    <h1 className="publications-page__title">Публикации</h1>
                    <p className='publications-page__text'>текст про статьи lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="filtres">
                        <PublicationsTypeFilter />
                        <PublicationsTypeFilter />
                    </div>
                </div>
                <PublicationCard 
                    article={articles[0]}
                />
                <PublicationCard 
                    article={articles[1]}
                />
                <PublicationCard 
                    article={articles[2]}
                />
                <PublicationCard 
                    article={articles[0]}
                />
                <PublicationCard 
                    article={articles[1]}
                />
                <PublicationCard 
                    article={articles[2]}
                />
                <PublicationCard 
                    article={articles[0]}
                />
                <PublicationCard 
                    article={articles[1]}
                />
                <div className="publications-page__all-articles">
                    <Link to='/publications'  className='btn publications-page__btn'>Все статьи</Link>
                </div>
            </div>
            <div className="publications-page__right-banner"></div>
        </section>
        </div>
    <Footer  isOfferOpen={isOfferOpen} setIsOfferOpen={setIsOfferOpen}
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
    </>

    );
  }
  
  export default PublicationsPage;