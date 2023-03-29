import './PublicationCard.scss';
// import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import Article from '../PublicationsPage/Article/Article';


function PublicationCard(props ) {
    const { article } = props;
    const [selectedArticle, setSelectedArticle] = useState(null);
    function handleArticleClick(article) {
        setSelectedArticle(article);
      }

    return (<>
   
        <div className="publication-card" key={article.id}>
            <ul className="publication-card__items">  {article.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
            {/* <Link to={`/publications/${article.id}`}className='publication-card__title'>{article.title}</Link> */}
            <div  onClick={() => handleArticleClick(article)}  className='publication-card__title'>{article.title}</div>
            <div className='publication-card__date'>{article.date}</div>
        </div>

    
    {selectedArticle && (
        <Article title={selectedArticle.title} content={selectedArticle.content} />
      )}
    
    </>
        

    )
}

export default PublicationCard;




