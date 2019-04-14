var React = require("react");

class Login extends React.Component {
  render() {



    // console.log(this.props.types);


    return (
      <html>
        <head />
        <body>
            Log-in
            <form method="POST" action="/login">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="password" placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;