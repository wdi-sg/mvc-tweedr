var React = require("react");

class Register extends React.Component {
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

            <div className="register-nav">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">Login</a>
              </li>
              </ul>
              </div>

          <h1 className="display-4">Don't have an account? Sign up with us!</h1>

          </div>

          <form method="POST" action="registerUser">

          <div className="form-group col-md">
            <label>Name</label>
            <input type="text" name="name" className="form-control"  aria-describedby="emailHelp"/>
            </div>
            <div className="form-group col-md">
            <label>Username</label>
            <input type="text" name="user_name" className="form-control"  aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">You will be using your username to login.</small>
            </div>
          <div className="form-group col-md">
            <label >Password</label>
            <input type="text" name="password" className="form-control" />
            <small id="emailHelp" className="form-text text-muted">Do not share your password with anyone else.</small>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;