var React = require("react");

class Register extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/home.css"/>
        </head>
        <body>
          <h3>Register</h3>
          <div className="wrapper_new">
            <p>Create your login details</p>
                <form action="/tweedr/register" method="POST">
                    <p>Username: </p><input type="text" className="input-field" name="username"/>
                    <p>Password: </p><input className="input-field" name="password"/>
                    <p><input type="submit" value="Submit"/></p>
                </form>
            </div>


        </body>
      </html>
    );
  }
}

module.exports = Register;
