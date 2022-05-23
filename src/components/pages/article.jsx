import React from 'react';
import { useMediaQuery } from 'react-responsive'

function createParagraph(sentences) {
  return (<div>
    <p style={{
      fontFamily: "Arial,Helvetica,sans-serif",
      fontSize: "1.75rem",
      fontWeight: "normal"
    }}>{sentences}</p>
    <br/>
  </div>);
}

function parseContent(content, textStyle) {
  let result = content.split("\\n");
  console.log(content);

  return (<div style={textStyle}>
    {result.map(createParagraph)}
  </div>);
} 

function Article(props) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1500px)' })
  
  let titleStyle = null;
  let imageStyle = null;
  let dateStyle = null;
  let textStyle = null;

  if(isTabletOrMobile) {
    titleStyle = {
      fontSize: "2.7rem",
      padding: "0.5rem 0",
      maxHeight: "100%",
      maxWidth: "90%"
    };

    imageStyle = {
      maxHeight: "90%",
      maxWidth: "90%"
    };

    dateStyle = {
      color: "#DDDDDD",
      fontFamily: "'BentonSans', sans-serif",
      fontWeight: "normal",
      paddingBottom: "2rem"
    };

    textStyle = {
      padding: "0 1.5rem"
    };
  } else if(isDesktop) {
    titleStyle = {
      fontSize: "2.7rem",
      padding: "0.5rem 0",
      maxHeight: "100%",
      maxWidth: "50%"
    };

    imageStyle = {
      maxHeight: "80%",
      maxWidth: "50%"
    };

    dateStyle = {
      color: "#DDDDDD",
      fontFamily: "'BentonSans', sans-serif",
      fontWeight: "normal",
      paddingBottom: "2rem"
    };

    textStyle = {
      padding: "0 30rem"
    };
  } else {
    titleStyle = {
      fontSize: "2.7rem",
      padding: "0.5rem 0",
      maxHeight: "100%",
      maxWidth: "50%"
    };

    imageStyle = {
      maxHeight: "80%",
      maxWidth: "50%"
    };

    dateStyle = {
      color: "#DDDDDD",
      fontFamily: "'BentonSans', sans-serif",
      fontWeight: "normal",
      paddingBottom: "2rem"
    };

    textStyle = {
      padding: "0 22.5rem"
    };
  }

  return (
    <div
      style={{
        background: '#303030',
        backgroundImage: "url('https://www.transparenttextures.com/patterns/mooning.png')",
        minHeight: '85vh',
        color: '#fff',
        padding: "60px 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
        <h2 style={titleStyle}>{props.title}</h2>
        <h3 style={dateStyle}>{props.date}</h3> 
        <img style={imageStyle} src={props.image} alt="article_image"/>

        <br/>

        {parseContent(props.content, textStyle)}
        </div>
  );
};

export default Article;