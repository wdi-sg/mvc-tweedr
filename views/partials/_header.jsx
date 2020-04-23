import React , {useState} from 'react'
import '../../styles/index.scss'

const _header = (props) => {


  const [isMenuShown, showMenu] = useState(false)

  const handleRegisterBtnClicked = e => {
    props.loginSignUpClick(e)
  }

  const handleLoginBtnClicked = e => {
    props.loginSignUpClick(e)
  }

  const handleHamburgerClicked = e => {
    if (isMenuShown) {
      showMenu(false)
    }else{
      showMenu(true)
    }
  }

  return (
    <section className="section">


        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <em className="navbar-item has-text-primary ">Tweedr</em>
            <a role="button" className={`navbar-burger${isMenuShown?" is-active":""}`} aria-label="menu"
               aria-expanded="false"  onClick = {handleHamburgerClicked}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu${isMenuShown?" is-active": ""}`}>

            <div className="navbar-start">

              <a className="navbar-item">
                Home
              </a>

              <a className="navbar-item">
                Tweets
              </a>

            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary has-text-weight-bold"
                     onClick={handleRegisterBtnClicked} id='navSignUpBtn'>
                    Sign up
                  </a>
                  <a className="button is-light" onClick={handleLoginBtnClicked} id='navLoginBtn'>
                    Log in
                  </a>
                </div>
              </div>
            </div>

          </div>


        </nav>

    </section>

  )

}

export default _header
