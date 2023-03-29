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
    const { title, content1, content2, content3, tags, image } = props;
  
    return (
        <>
        <Header />
            <div className="article">
            <div className="article__left-banner"></div>
            <div className='article__container'>
            <Breadcrumbs                             
                    items={[
                        {label: 'Главная', url: '/' },
                        {label: 'Публикации', url: '/publications' },
                        {label: title, url: '/' },]}/>
            <ul className="article__items">  {tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
                <h2>{title}</h2>
                <div> <img src={image} alt={title} /></div>
                <div className="article__content">
                    <p>{content1}</p>
                    <p>{content2}</p>
                    <p>{content3}</p>
                </div>
            </div>
            <div className="article__right-banner"></div>
            </div>
            <Footer 
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
        </>

    );
  }
  export default Article;