var React = require("react");

class Register extends React.Component {
  render() {

    return (
      <html>
        <head/>
        <body>
          <h3>Welcome!! Let's get you Register!!</h3>

          <form action="/register" method="POST">
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

module.exports = Register;