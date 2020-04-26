import React from 'react'

const Tweet = (props) =>{

  // username
  // posted date
  // content


  return (
    <div className="box box-dark box-constrained">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://i.pravatar.cc/128"
                 alt="Image"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@{props.tweetData.user_name}</small>
              {/*<small>31m</small>*/}
              <br/>
              {props.tweetData.content}
            {/*  content*/}
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item" aria-label="reply">
            <span className="icon is-small">
              <i className="fas fa-reply" aria-hidden="true"></i>
            </span>
              </a>
            {/*  <a className="level-item" aria-label="retweet">*/}
            {/*<span className="icon is-small">*/}
            {/*  <i className="fas fa-retweet" aria-hidden="true"></i>*/}
            {/*</span>*/}
            {/*  </a>*/}
              <a className="level-item" aria-label="like">
            <span className="icon is-small">
              <i className="fas fa-heart" aria-hidden="true"></i>
            </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  )

}

export default Tweet