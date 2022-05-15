import { padding } from "@mui/system";
import React from "react";

function ArticleCard(props) {
    return (<div style={{
            padding: "25px 15px",
            margin: "10px 30px",
            maxHeight: "500px",
            maxWidth: "350px",
            textAlign: "left",

        }}>

        <h1 style={{
            fontFamily: "'BentonSans', sans-serif",
            fontWeight: "bold"
        }}>{props.title}</h1>

        <p style={{
            color: "white",
            padding: "1rem 0rem"
        }}>{props.date}</p>

        <img style={{
            maxHeight: "100%",
            maxWidth: "100%"
        }} src={props.image} alt="article_image"/>
    </div>)
}

export default ArticleCard;
