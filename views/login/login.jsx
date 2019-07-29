var React = require("react");
var HEAD = require('../layouts/head.jsx');
var BODY = require('../layouts/body.jsx')

class Login extends React.Component {
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
					<div className = {'col-4'} id = {'loginPagebar'}>
						<img src={'/img/tweedr2.png'} />
			      		<form method={'POST'} action={'/login'} id ={'loginForm'}>
			              <div className={"form-group"}>
			                <label for={"username"}>Username</label>
			                <input type={"text"} className={"form-control"} id={"username"} aria-describedby={"Username"} name={'username'} />
			              </div>
			              <div className={"form-group"}>
			                <label for={"password"}>Password</label>
			                <input type={"password"} className={"form-control"} id={"password"} aria-describedby={"Password"} name={'password'} />
			              </div>
			              <button type={'submit'} className={'btn btn-dark btn-lg'}>Login</button>
			            </form>
			            <p> No Account Yet?</p>
			            <a href={'/register'}><button className={'btn btn-dark btn-lg'}>Sign Up</button></a>
			          </div>
			    </div>
	        </BODY>
        </html>   
    );
  }
}

module.exports = Login;