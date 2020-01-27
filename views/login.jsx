var React = require("react");

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <form method="POST" action="/index">
            Sign up:
            <div>
            Username: 
            <input type="text" name="name"/>
            </div>
            <div>
            Password:
            <input type="text" name="password"/>
            </div>
            <div>
            <input type="submit" value="Submit"/>
            </div>
        </form>
    );
  }
}

module.exports = Login;
