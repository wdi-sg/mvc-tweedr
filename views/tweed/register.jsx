var React = require("react");

class Register extends React.Component {
  render() {
        // console.log('register.jsx')
      let registerStatus;
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
            <form action="/register" method="POST">
                <p>Name: <input name="name" required/></p>
                <p>Password: <input name="password" required/></p>
                <p><input type="submit" value="Register" /></p>
            </form>
            <p className="message-box"></p>
            <script>registerStatus = `{this.props.register}`;</script>
            <script src="/register.js"></script>
        </body>
      </html>
    );
  };
};
module.exports = Register;