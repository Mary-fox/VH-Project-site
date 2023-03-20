import React from 'react';
import "./Breadcrumbs.scss"
import {Link} from"react-router-dom";
import './Breadcrumbs.scss';


function Breadcrumbs ({items}) {

return (
    <nav className="breadcrumbs">
    {items.map((item) => (
       <div className='breadcrumbs__item' key={item.label}>
            <Link className="breadcrumbs__link" to={item.url}>{item.label}</Link> <span>{`→`}</span>
        </div>
        )
    )}     
    </nav>
)
}

export default Breadcrumbs;
