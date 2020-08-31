var React = require('react');

class Login extends React.Component {

  render() {

    return (
              <html>
                <body>
                    <h2>Log In</h2>
                    <form method = 'POST' action = '/verification'>
                        Username: <input type = 'text' name = 'username'/><br/>
                        Password: <input type = 'password' name = 'password'/><br/>
                        <input type = 'submit' name = 'submit'/>
                    </form>
                </body>
              </html>
    );
  }
}

module.exports = Login;
