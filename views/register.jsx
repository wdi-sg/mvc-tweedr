var React = require('react');

class Register extends React.Component {

  render() {

    return (
              <html>
                <body>
                    <h2>Register New User</h2>
                    <form method = 'POST' action = '/registered'>
                        Username: <input type = 'text' name = 'username'/><br/>
                        Password: <input type = 'password' name = 'password'/><br/>
                        <input type = 'submit' name = 'submit'/>
                    </form>
                </body>
              </html>
    );
  }
}

module.exports = Register;
