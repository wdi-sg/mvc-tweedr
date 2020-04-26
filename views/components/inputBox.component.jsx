import React from 'react'

const InputBoxComponent = (props) => {

 return (
   <div className="box box-dark box-constrained">
     <form className="media">
       <div className="media-left">
         <figure className="image is-64x64">
           <img src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image" className="is-rounded"/>
         </figure>
       </div>
       <div className="media-content">
         <div className="content">
          <div className="field">
            <div className="control">
              <input type="text" className="input is-medium" placeholder="What's happening?"/>
            </div>
          </div>
         </div>
         <nav className="level is-mobile">
           <div className="level-left ">
            {/* <a className="level-item" aria-label="reply">*/}
            {/*<span className="icon is-small">*/}
            {/*  <i className="fas fa-reply has-text-white-bis" aria-hidden="true"></i>*/}
            {/*</span>*/}
            {/* </a>*/}
            {/* <a className="level-item" aria-label="retweet">*/}
            {/*<span className="icon is-small">*/}
            {/*  <i className="fas fa-retweet has-text-white-bis" aria-hidden="true"></i>*/}
            {/*</span>*/}
            {/* </a>*/}
            {/* <a className="level-item" aria-label="like">*/}
            {/*<span className="icon is-small">*/}
            {/*  <i className="fas fa-heart has-text-white-bis" aria-hidden="true"></i>*/}
            {/*</span>*/}
            {/* </a>*/}
           </div>
           <div className="level-right">
             <button className="button is-primary">Tweet</button>
           </div>
         </nav>
       </div>
     </form>
   </div>
 )

}

export default InputBoxComponent
