import React from 'react';

function createParagraph(sentences) {
  return (<div>
    <p style={{
            fontSize: "1.75rem",
            fontFamily: "Arial,Helvetica,sans-serif",
            fontWeight: "normal",
            padding: "0 22.5rem"
      }}>{sentences}</p>
    <br/>
  </div>);
}

function parseContent(content) {
  let result = content.split(/\r?\n/);

  return result.map(createParagraph);
}

function Article(props) {
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

        <h2 style={{
            fontSize: "2.7rem",
            padding: "0.5rem 0",
            maxHeight: "100%",
            maxWidth: "50%"
        }}>{props.title}</h2>

        <h3 style={{
            color: "#DDDDDD",
            fontFamily: "'BentonSans', sans-serif",
            fontWeight: "normal",
            paddingBottom: "2rem"
        }}>{props.date}</h3> 

      <img style={{
            maxHeight: "80%",
            maxWidth: "50%"
        }} src={props.image} alt="article_image"/>

        <br/>

        {parseContent(props.content)}
        </div>
  );
};

export default Article;