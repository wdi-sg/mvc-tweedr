var React = require("react");
var HEAD = require('../layouts/head.jsx');
var BODY = require('../layouts/body.jsx')

class Register extends React.Component {
  render() {
    return (
    	<html>
	    	<HEAD>
	    		<title> Tweedr Login</title>
	    	</HEAD>
	    	<BODY>
          <div className = {'row'}>
            <div className = {'col-8'} id ={'loginImage'}>
            </div>
            <div className = {'col-4'} id = {'registerPagebar'}>
              <img src={'/img/tweedr2.png'} />
              <form method={'POST'} action={'/register'} id={'registerForm'}>
                <div className={"form-group"}>
                  <label for={"username"}>Username</label>
                  <input type={"text"} className={"form-control"} id={"username"} aria-describedby={"Username"} name={'username'} />
                </div>
                <div className={"form-group"}>
                  <label for={"password"}>Password</label>
                  <input type={"password"} className={"form-control"} id={"password"} aria-describedby={"Password"} name={'password'} />
                </div>
                <div className={"form-group"}>
                  <label for={"name"}>Name</label>
                  <input type={"text"} className={"form-control"} id={"name"} aria-describedby={"Name"} name={'name'} />
                </div>
                <div className={"form-group"}>
                  <label for={"photo_url"}>Photo URL</label>
                  <input type={"text"} className={"form-control"} id={"photo_url"} aria-describedby={"Photo URL"} name={'photo'} />
                </div>
                <div className={"form-group"}>
                  <label for={"age"}>Age</label>
                  <input type={"number"} min={'18'} className={"form-control"} id={"age"} aria-describedby={"Age"} name={'age'} />
                </div>
                <button type={'submit'} className={'btn btn-dark btn-lg'}>Sign Up</button>
              </form>
              <p> Aready have an account?</p>
              <a href={'/login'}><button className={'btn btn-dark btn-lg'}>Back to Login</button></a>   
            </div>
          </div>
	       </BODY>
      </html>   
    );
  }
}

module.exports = Register;