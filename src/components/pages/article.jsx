import React, { useEffect } from 'react';
import "./article.css"

function CreateParagraph(sentences) {
  return (<div>
    <p className='text-type'>{sentences}</p>
    <br/>
    <br/>
  </div>);
}

function parseContent(content) {
  const modifiedContent = content.replace('\\n', "1234");
  let result = modifiedContent.split("1234");
  
  return (
    <div className='text-padding'>
      {result.map(CreateParagraph)}
    </div>
  );
} 

function Article(props) {
  useEffect(() => {
    fetch(`https://chicagomoontimes.com/api/visit/${props.path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ path: '/articles/' + props.path })
    });
  }, [props.path]);

  return (
      <div className='page-structs'>
        <div className='words'>
        <h2 className='title-style'>{props.title}</h2>
        <h3 className='date-style'>{props.date}</h3> 
        </div>
        <img className='img-size' src={props.image} alt="article_image"/>
        <br/>
        {parseContent(props.content)}
    </div>
  );
};

export default Article;