import React from 'react'

const RegistrationForm = (props) => {

  return (

    <div className="column has-dark-shade-background is-fixed-height-box">
      <form action="/register" method="post" className='has-text-centered'>
        <section className="hero is-medium is-bold">
          <div className="hero-body">

            <div className="container">
              <h1 className="title has-text-white">
                See whats happening in the world right now
              </h1>
              <h2 className="subtitle">
                Join tweedr today!
              </h2>

            <div className="field">

              <label className="label has-text-white has-text-left">Username</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="username" name="username"/>

                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>

                <span className="icon is-small is-right">
                   <i className="fas fa-check"></i>
                 </span>

              </div>
              {/*<p className="help is-success">This username is available</p>*/}
            </div>

            <div className="field">
              <label
                className="label has-text-white has-text-left">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="text" name="password" placeholder="password"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-password"></i>
                 </span>

                <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                </span>

              </div>
              {/*<p className="help is-success">This username is available</p>*/}
              {/*<p className="help is-danger">This email is invalid</p>*/}
            </div>

            <div className="field">
              <p className="control">
                <button className="button is-primary">
                  Sign up
                </button>
              </p>
            </div>

            </div>
          </div>
        </section>
      </form>
    </div>
  )

}

export default RegistrationForm