var React = require("react");
var Layout = require('../layout/layout.jsx');

class Register extends React.Component {
  render() {



    // console.log(this.props.types);


    return (
      <html>
        <head />
        <body>
            Register here
            <form method="POST" action="/register">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="profile_img" placeholder="img"/>
                <input type="text" name="password" placeholder="password"/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;