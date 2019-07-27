var React = require("react");

class Login extends React.Component {
  render() {

    return (
      <html>
        <head/>
        <body>
          <h3>Welcome!! Let's get you Log In!!</h3>

          <form action="/login" method="POST">
              <p>Your User Name</p>
              <input name="name"/>

              <p>Your User Password</p>
              <input name="password"/>

              <br></br>
              <input type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;