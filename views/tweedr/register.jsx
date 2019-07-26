var React = require("react");
var Default = require("./layout/default");

class Register extends React.Component {
  render() {
    let url = '/tweedr/add_user'
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser}>

            <form className="login-form" action={url} method="POST">
                <h2>Register</h2>
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
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
      </Default>
    );
  }
}

module.exports = Register;
