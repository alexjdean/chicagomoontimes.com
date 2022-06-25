import React from "react";
import { useMediaQuery } from 'react-responsive'
import './Card.css';

function Card(props) {
    let pageClass = null;
    let titleClass = null;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' });

    if(props.spotlight === true && !isTabletOrMobile) {
        pageClass = "page-spotlight";
        titleClass = "article-title title-spotlight";
    } else {
        pageClass = "page"
        titleClass = "article-title title";
    }

    return (<div className={pageClass}>
        <img className="img" src={props.image} alt="article_image"/>
        <h1 className={titleClass}>{props.title}</h1>
        <p className="date">{props.date}</p>        
    </div>);
}

export default Card;
