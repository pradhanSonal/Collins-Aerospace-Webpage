import React from 'react'
import '../components/article.css'

function Article(props) {
  return (
    <div>
      <div className="article col-sm-12" >
  <img src={props.img} className="article-img-top" alt="body"/>
  <div className="article-body">
    <h5 className="article-title">{props.title}</h5>
    <p className="article-text">{props.text}</p>
    <a href="wwww.google.com" className='article-btn'>Learn more</a>
  </div>
</div>
    </div>
  )
}

export default Article;
