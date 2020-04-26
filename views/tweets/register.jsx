var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Please enter your user details for registration!</h1>
                <div>
                    <form action='/register' method="POST">
                        <p>
                            User ID: <input name="userId" />
                        </p>
                        <p>
                            Password: <input name="password"/>
                        </p>

                        <input type="submit" value="Register!"></input>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;