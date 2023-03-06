import React from "react";
import { useMediaQuery } from 'react-responsive'
import './Card.css';

function Card(props) {
    let pageClass = null;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });

    if(props.spotlight === true && !isTabletOrMobile) {
        pageClass = "card-spotlight";
    } else {
        pageClass = "card"
    }

    return (<div className={pageClass}>
        <img src={props.image} alt="article_image"/>
        <div className="card-content">
            <h1 className="card-title">{props.title}</h1>
            <p className="date">{props.date}</p> 
        </div>
    </div>);
}

export default Card;
