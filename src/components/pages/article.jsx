import React from 'react';
import "./article.css"

function CreateParagraph(sentences) {
  return (<div>
    <p className='text-type'>{sentences}</p>
    <br/>
  </div>);
}

function parseContent(content) {
  let result = content.split("\n");
  
  return (<div className='text-padding'>
    {result.map(CreateParagraph)}
  </div>);
} 

function Article(props) {
  return (
    <div className='page-structs'>
        <h2 className='title-style'>{props.title}</h2>
        <h3 className='date-style'>{props.date}</h3> 
        <img className='img-size' src={props.image} alt="article_image"/>
        <br/>
        {parseContent(props.content)}
    </div>
  );
};

export default Article;