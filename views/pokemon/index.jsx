var React = require("react");

class Login extends React.Component {
  render() {
    
    return (
      <html>
        <head>
        </head>
        <body>
          <h3>Login</h3>
          <form action = "/login" method="POST">
                  <div className="form-group">
                    <label>Username</label>
                    <input name="name" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="text" className="form-control" placeholder="Password"/>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
