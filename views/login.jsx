var React = require("react");

class Login extends React.Component {
  render() {

    return (
      <html>
        <head>
        <link rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        </head>
        <body>
        <div className="register-container">
        <div className="jumbotron">
            <div className="login-nav">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/register">Register</a>
                  </li>
                  </ul>
                  </div>
          <h1 className="display-4">Login</h1>
          </div>


          <form method="POST" action="userLogin">

            <div className="form-group col-md">
            <label>Username</label>
            <input type="text" name="username" className="form-control"  aria-describedby="emailHelp"/>
            </div>

          <div className="form-group col-md">
            <label >Password</label>
            <input type="text" name="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;