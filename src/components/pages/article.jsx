import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
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
  const [linkCopied, setLinkCopied] = useState(false);

  function copyLink() {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setLinkCopied(true);
  }

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

        <button className='share-button' onClick={copyLink} disabled={linkCopied}>
          {linkCopied ? 'Link copied' : <>Share <FontAwesomeIcon icon={faShare} /></>}
        </button>

        </div>
        <img className='img-size' src={props.image} alt="article_image"/>
        <br/>
        {parseContent(props.content)}
    </div>
  );
};

export default Article;