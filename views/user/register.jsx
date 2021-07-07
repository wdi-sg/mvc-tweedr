var React = require('react');

class Register extends React.Component {
  render() {
    return (
            <form className="register" action="/register" method="POST">
                <h1>Register</h1>
                <input type="text"  name= "name" placeholder="name"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="text" name="email" placeholder="Email adress"/>
                <input className="btn btn-primary" type="submit" value=" Register"/>
                or
                <a href="/login">Log in</a>
            </form>
    );
  }
}

module.exports = Register;