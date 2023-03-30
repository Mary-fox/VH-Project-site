import PublicationCard from '../PublicationCard/PublicationCard';
import './Publications.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { articles } from '../../datas/articles';
function Publications( ) {
    return (
        <div className="publications">
        <div className="publications__left-banner">
        <h3>Публикации</h3>
        </div>
            <div className='publications__container'>
                <div className='publications__main-block'>
                    <h3 className="publications__title">Публикации</h3>
                    <p className='publications__text'>текст про статьи lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                <div className="publications__all-articles">
                    <Link to='/publications'  className='btn publications__btn'>Все статьи</Link>
                </div>
            </div>
            <div className="publications__right-banner"></div>
        </div>
    )
}
    
export default Publications;
