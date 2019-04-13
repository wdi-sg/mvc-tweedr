var React = require('react');
var DefaultLayout = require('../layouts/default');

class Register extends React.Component {
  render() {
    return (
        <DefaultLayout title="Register Account">
            <form className="register" action="/register" method="POST">
                <h1>Register New Account</h1>
                <input type="text" className="form-control username" name="username" placeholder="Username"/>
                <input type="password" className="form-control password" name="password" placeholder="Password"/>
                <input className="btn btn-success" type="submit" value="Register New Account"/>
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = Register;