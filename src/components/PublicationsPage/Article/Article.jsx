import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Article.scss';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
// import PublicationCard from '../PublicationCard/PublicationCard';
// import { HashLink as Link } from 'react-router-hash-link';
// import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
// import PublicationsTypeFilter from './PublicationsTypeFilter/PublicationsTypeFilter';
// import { useParams } from 'react-router-dom';






function Article({ title, content}) {
    // const { id } = useParams();
    return (
    <div className='article-page'>
    <Header/>
        <div className='article'>
            <Breadcrumbs
                items={[
                    {label: 'Главная', url: '/' },
                    {label: 'Публикации', url: '/publications' },

                ]}/>
                
                    <h2>{title}</h2>
                    <p>{content}</p>
        </div>
    <Footer 
        text="Расскажите о вашем проекте"
        subtext="Опишите свою задачу и мы свяжемся с вами в кратчайшие сроки." 
        btn="Написать"/>
    </div>

    );
  }
  
  export default Article;

