import React from "react";
import { useMediaQuery } from 'react-responsive'

function ArticleCard(props) {
    let page_style = {};
    let title_style = {};
    let dateStyle = {};
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })

    if(isTabletOrMobile) {
        page_style = {
            padding: "20px 15px",
            margin: "10px 25px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "80vh",
            float: "left"
        };
        
        title_style = {
            fontSize: "3.75rem",
            padding: "0.5rem 0",
            maxHeight: "100%",
            maxWidth: "100%"
        };

        dateStyle = {
            color: "#DDDDDD",
            fontFamily: "'BentonSans', sans-serif",
            fontWeight: "normal",
            fontSize: "2.5rem"
        };
    } else {
        dateStyle = {
            color: "#DDDDDD",
            fontFamily: "'BentonSans', sans-serif",
            fontWeight: "normal"
        };

        if (props.spotlight === true) {
            page_style = {
                padding: "20px 15px",
                margin: "10px 25px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "80vh",
                float: "left"
            };
    
            title_style = {
                fontSize: "1.75rem",
                padding: "0.5rem 0",
                maxHeight: "100%",
                maxWidth: "100%"
            };
     
        } else {
            page_style = {
                padding: "20px 15px",
                margin: "10px 25px",
                display: "flex",
                flexDirection: "column",
                maxWidth: "35vh",
                float: "left"
            };
            
            title_style = {
                fontSize: "1.25rem",
                padding: "0.5rem 0",
                maxHeight: "100%",
                maxWidth: "100%"
            };
            
        }    
    } 

    return (<div style={page_style}>
    
        <img style={{
            maxHeight: "100%",
            maxWidth: "100%"
        }} src={props.image} alt="article_image"/>

        <h1 className="article-title" style={title_style}>{props.title}</h1>

        <p style={dateStyle}>{props.date}</p>        
    </div>)
}

export default ArticleCard;
