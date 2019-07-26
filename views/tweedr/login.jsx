var React = require("react");
var Default = require("./layout/default");

class Login extends React.Component {
  render() {
    let url = "/tweedr/login_user"
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId}>

            <form className="login-form" method="POST" action={url}>
                <h2>Login</h2>
                <table className="table table-bordered">
                    <tr>
                        <th scope="row">Name</th>
                        <td><input type="text" name="name"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Password</th>
                        <td><input type="password" name="password"/></td>
                    </tr>
                </table>
                <input className="submit-button" type="submit" value="submit"/>
            </form>
            <form className="register-button"action="/tweedr/register">
                <input type="submit" value="Register"/>
            </form>
      </Default>
    );
  }
}

module.exports = Login;
