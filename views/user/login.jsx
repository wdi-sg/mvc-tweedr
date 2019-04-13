var React = require('react');
var DefaultLayout = require('../layouts/default');

class Login extends React.Component {
  render() {
    return (
        <DefaultLayout title="Login">
            <form action="/login" method="POST">
                <h1>Login</h1>
                Username: <input className="form-control" name="username"/><br/>
                Password: <input type="password" className="form-control" name="password"/><br/>
                <input className="btn btn-primary" type="submit" value="Login"/>
            </form>
            <a href="/register">Register New Account</a>
        </DefaultLayout>
    );
  }
}

module.exports = Login;