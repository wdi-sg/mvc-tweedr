var React = require("react");

export default class Login extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h3>Welcome to Tweedr</h3>
          <form method ="post" action= "/login">
          Username: <input type ="text" name = "username"/><br/>
          Password: <input type ="password" name = "password"/><br/>
          <input type="submit" value="login"/>
          </form>
          <br/><br/>
          <form method = "post" action ="/register">
          Username: <input type ="text" name = "username"/><br/>
         Password: <input type ="password" name = "password"/><br/>
          <input type = "submit" value ="register"/>
          </form>
        </body>
      </html>
    );
  }
}

