var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Please enter your user details for Login!!</h1>
                <div>
                    <form action='/login' method="POST">
                        <p>
                            User ID: <input name="userId" />
                        </p>
                        <p>
                            Password: <input name="password"/>
                        </p>

                        <input type="submit" value="Login!"></input>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;