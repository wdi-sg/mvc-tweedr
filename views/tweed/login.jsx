var React = require("react");

class Login extends React.Component {
  render() {
        // console.log('register.jsx')
        let message = ""
        if (this.props.login === "failed") {
            message = "Name/Password doesn't match. Please try again. Name/Password is case-sensitive."
        }

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
            <div>
                <a href="/">Back to Home</a>
            </div>
            <h3>Tweedr Registration</h3>
            <h3>Log-In</h3>
            <form action="/login" method="POST">
                <p>Name: <input name="name" required/></p>
                <p>Password: <input name="password" required/></p>
                <p><input type="submit" /></p>
            </form>
            <div>
                <p>{message}</p>
            </div>
        </body>
      </html>
    );
  }
}
module.exports = Login;