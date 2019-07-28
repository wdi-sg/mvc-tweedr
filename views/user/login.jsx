var React = require('react');

class Login extends React.Component {
  render() {
    return (
            <form className="login" action="/login" method="POST">
                <h1>Log in</h1>
                <input type="text"  name="name" placeholder="Username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input className="btn btn-primary" type="submit" value=" Log In"/>
                <a href="/register">Register New Account</a>
            </form>
    );
  }
}

module.exports = Login;