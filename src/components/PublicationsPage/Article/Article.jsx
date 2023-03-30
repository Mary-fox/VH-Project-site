import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Article.scss';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
// import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
// // import PublicationCard from '../PublicationCard/PublicationCard';
// // import { HashLink as Link } from 'react-router-hash-link';
// // import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
// // import PublicationsTypeFilter from './PublicationsTypeFilter/PublicationsTypeFilter';


function Article(props) {
    const { title, text1, text2, text3, tags, image, date} = props;
  
    return (
        <>
        <Header />
            <section className="article">
                <div className="article__left-banner"></div>
                <div className='article__container'>
                    <Breadcrumbs                             
                        items={[
                            {label: 'Главная', url: '/' },
                            {label: 'Публикации', url: '/publications' },
                            {label: title, url: '/' },]}/>
                    <ul className="article__items">  {tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
                    <h1 className='article__title'>{title}</h1>
                    <div> <img src={image} alt={title} /></div>
                    <div className="article__text">
                        <p>{text1}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                    </div>
                    <div className='article__date'>{date}</div>
                </div>
                <div className="article__right-banner"></div>
            </section>
            <Footer 
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
        </>

    );
  }
  export default Article;