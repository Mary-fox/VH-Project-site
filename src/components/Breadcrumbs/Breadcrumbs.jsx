import React from 'react';
import "./Breadcrumbs.scss"
import {Link} from"react-router-dom";


function Breadcrumbs ({items}) {

return (
    <nav className="breadcrumbs">
    {items.map((item) => (
       <div className='breadcrumbs__item' key={item.label}>
            <Link className="breadcrumbs__link" to={item.url}>{item.label}</Link> <span>{<svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.032 9.77C1 9.85 0.952 9.908 0.888 9.944C0.824 9.984 0.758 10.004 0.69 10.004H0.456L4.188 0.991999C4.248 0.844 4.356 0.77 4.512 0.77H4.758L1.032 9.77Z" fill="#262626"/></svg>}</span>
        </div>
        )
    )}     
    </nav>
)
}

export default Breadcrumbs;
