var React = require("react");

class Login extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head>
        </head>
        <body>
          <h3>Login</h3>
          <form action = "/login" method="POST">
                  <div class="form-group">
                    <label>Username</label>
                    <input name="name" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input name="password" type="text" class="form-control" placeholder="Password"/>
                  </div>
                  
                  <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
