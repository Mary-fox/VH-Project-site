import { useParams } from 'react-router-dom';
import Article from '../PublicationsPage/Article/Article';
import { articles } from '../../articles';

function ArticlePage() {
  const { id } = useParams();
  
  console.log('id', id);
  console.log('articles', articles);
  const article = articles.find((a) => a.id === parseInt(id));
console.log('article', article);
 
return article ? <Article title={article.title} content1={article.content1} content2={article.content2} content3={article.content3} tags={article.tags} image={article.image} /> : <div>Статья не найдена</div>;
}

export default ArticlePage;