var React = require('react');
var DefaultLayout = require('../layouts/default');

class Register extends React.Component {
  render() {
    return (
        <DefaultLayout title="Register Account">
            <form action="/register" method="POST">
                <h1>Register New Account</h1>
                Username: <input className="form-control" name="username"/><br/>
                Password: <input type="password" className="form-control" name="password"/><br/>
                <input className="btn btn-primary" type="submit" value="Register"/>
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = Register;