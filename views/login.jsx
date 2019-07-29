var React = require("react");

class Login extends React.Component {
  render() {

    return (
        <html>
            <div>
                <h1 className="login">Please Login</h1>
                <form method="POST" action="/login/check">
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
                <input type="submit" value="Login"/>
                </form>
            </div>
        </html>
    );
  }
}

module.exports = Login;