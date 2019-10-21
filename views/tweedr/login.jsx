var React = require("react");

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Login Page</h3>
          <form action="/login" method="POST">
                Enter Your Login Details Here:
                <br></br>
                <input type="text" name="name" placeholder="name"/>
                <br></br>
                <input type="text" name="password" placeholder="password"/>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>          
        </body>
      </html>
    );
  }
}

module.exports = Login;
