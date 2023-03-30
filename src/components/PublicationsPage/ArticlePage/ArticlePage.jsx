import { useParams } from 'react-router-dom';
import Article from '../Article/Article';
import { articles } from '../../../datas/articles';

function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

 
  return article ? <Article title={article.title} text1={article.text1} text2={article.text2} text3={article.text3} tags={article.tags} image={article.image} date={article.date}/> : <div>Статья не найдена</div>;
}

export default ArticlePage;