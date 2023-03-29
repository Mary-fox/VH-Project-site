import './PublicationCard.scss';
import { HashLink as Link } from 'react-router-hash-link';

function PublicationCard(props) {
    return (
        <div className="publication-card">
            <ul className="publication-card__items">{props.item}</ul>
            <Link  to={props.link} className='publication-card__title'>{props.title}</Link>
            <div className='publication-card__date'>{props.date}</div>
        </div>
    )
}
    
export default PublicationCard;
