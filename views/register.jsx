var React = require("react");

class Register extends React.Component {
  render() {

    return (
        <html>
            <div>
                <h1 className="login">Register</h1>
                <form method="POST" action="/register/new_acc">
                <table className="table table-bordered">
                    <tr>
                        <th scope="row">Username</th>
                        <td><input type="text" name="username"/></td>
                    </tr>
                    <tr>
                        <th scope="row">Password</th>
                        <td><input type="password" name="password"/></td>
                    </tr>
                </table>
                <input type="submit" value="Register"/>
                </form>
            </div>
        </html>
    );
  }
}

module.exports = Register;