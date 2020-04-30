import React from 'react'
const moment = require('moment')

const Tweet = (props) =>{

  // username
  // posted date
  // content


  return (
    <div className="box box-dark box-constrained">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.tweetData.profile_pic_url}
                 alt="No Avatar" className="is-rounded"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong><small>@{props.tweetData.user_name}</small>
              <small> - {moment(props.tweetData.created_at).fromNow()}</small>
              <br/>
              {props.tweetData.content}
              <figure className="image is-5by3">
                <img src={props.tweetData.media_url} alt="no media"/>
              </figure>
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