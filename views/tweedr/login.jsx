var React = require("react");

class Login extends React.Component {

  render() {
    // console.log(this.props.types);
    return (
        <html>
          <head />
            <body>
              <form method="POST" action="/login">
                <h1>LOG IN</h1>
                  NAME: <input type="text" name="username" placeholder="name"/>
                  <br/>
                  PASSWORD: <input type="text" name="password" placeholder="password"/>
                  <br/>
                  <input type="submit" value="SUBMIT"/>
              </form>
            </body>
        </html>
    );
  }
}

module.exports = Login;