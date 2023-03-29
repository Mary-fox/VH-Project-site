import './PublicationCard.scss';
import { HashLink as Link } from 'react-router-hash-link';
// import { useState } from 'react';
// import Article from '../PublicationsPage/Article/Article';


function PublicationCard(props ) {
    const { article } = props;
 

    return (<>
   
        <div className="publication-card" key={article.id}>
            <ul className="publication-card__items">  {article.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
            <Link to={`/publications/${article.id}`} className='publication-card__title'>{article.title}</Link>
            <div className='publication-card__date'>{article.date}</div>
        </div>

    
    </>
        

    )
}

export default PublicationCard;




