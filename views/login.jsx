var React = require('react');

class Login extends React.Component {
  render() {
    return (

          <div>
            <h1>Login</h1>
            <form action="/tweets" method="POST">
                <p>
                    username
                    <input name="username"/>
                </p>
                <p>
                    password
                    <input name="password"/>
                </p>
                <input type="submit" name="login"/>
            </form>
          </div>

    );
  }
}

module.exports = Login;
