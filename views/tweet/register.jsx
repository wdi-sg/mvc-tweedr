var React = require("react");
class Register extends React.Component {
  render() {
    let message = this.props.message;
    return (
      <html>
        <head/>
        <body>
          <h1>{message}</h1>
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