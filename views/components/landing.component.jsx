import React from 'react'
import RegistrationForm from './reg.component.form'
import LoginForm from './login.component.form'

const Landing = (props) => {

  // reg form = 0; login form = 1
  const switchForm = (whichForm) => whichForm ?
    (<LoginForm/>) : (<RegistrationForm/>)

  return (
    <React.Fragment>

      <section className="section">

        <div className="columns is-gapless is-vcentered">
          <div className="column">
            <section className="hero is-medium is-bold">
              <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                      Follow your friends.
                    </h1>
                    <h2 className="subtitle">
                      Hear what people are talking about.
                    </h2>
                    <h2 className='subtitle'>Join the conversation.</h2>
                  </div>
                </div>
              </section>
          </div>
            {switchForm(props.displayForm)}
        </div>
      </section>



    </React.Fragment>
  )
}


export default Landing