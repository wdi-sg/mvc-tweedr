var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <body>
          <h3>Welcome to Fucking Tweedr</h3>
          <form method ="post" action= "/login">
          <input type ="text" name = "name"/><br/>
          <input type ="password" name = "pw"/><br/>
          <input type="submit" value="login"/>
          </form>
          <br/><br/>
          <form method = "post" action ="/register">
          <input type ="text" name = "name"/><br/>
          <input type ="password" name = "pw"/><br/>
          <input type = "submit" value ="register"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;
