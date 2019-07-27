var React = require("react");
var Default = require("./layout/default");

class Login extends React.Component {
  render() {
    let url = "/tweedr/login_user"
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>

            <h2>Log In</h2>
            <form className="login-form needs-validation" action={url} method="POST" novalidate>
              <div className="form-group">
                <label for="validationTooltip01">Name</label>
                <input type="text" className="form-control" id="validationTooltip01" name="name" placeholder="Enter Name" required/>
                <div className="valid-feedback">
                    Looks good!
                  </div>
              </div>
              <div className="form-group needs-validation" novalidate>
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" required/>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <form className="register-button"action="/tweedr/register">
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
      </Default>
    );
  }
}

module.exports = Login;
