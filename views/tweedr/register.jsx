let React = require("react");
let Head = require("./components/head");
let BootstrapScripts = require("./components/bootstrap_scripts");
let Header = require("./components/header");

class Login extends React.Component {
  render() {
    console.log(this.props.username);
    console.log(this.props.password);
    let usernameValidation;
    let usernameInput;
    //========================
    //username validation
    //========================
    if (this.props.username === false) {
      usernameInput = (
        <input
          type="text"
          className="form-control is-invalid"
          id="validationServerUsername"
          placeholder="Username"
          name="username"
          aria-describedby="inputGroupPrepend3"
          required
        />
      );
      usernameValidation = <div className="invalid-feedback">Username already taken!</div>;
    } else {
      usernameInput = (
        <input
          type="text"
          className="form-control"
          id="validationServerUsername"
          placeholder="Username"
          name="username"
          aria-describedby="inputGroupPrepend3"
          required
        />
      );
      usernameValidation = <div className="valid-feedback" />;
    }

    //========================
    //password validation
    //========================
    let passwordInput;
    let passwordValidation;
    if (this.props.password === false) {
      passwordInput = (
        <input
          type="text"
          className="form-control is-invalid"
          id="validationServer01"
          placeholder="Enter Password"
          name="password"
          required
        />
      );
      passwordValidation = <div className="invalid-feedback">Password must be at least 7 characters!</div>;
    } else {
      passwordInput = (
        <input
          type="text"
          className="form-control"
          id="validationServer01"
          placeholder="Enter Password"
          name="password"
          required
        />
      );
      passwordValidation = <div className="valid-feedback" />;
    }

    return (
      <html>
        <Head />
        <body id="login-body">
          <Header />
            <div className="container mt-2 pt-4 pb-3" id="login-container">
              <div className="row d-flex">
                <div className="col-2" />
                <div className="col-8">
                  <div className="row">
                    <div className="col mb-3">
                      <div id="register-header">Create Your Account</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <form action="/register/query" method="post">
                        <div className="form-row mb-3">
                          <div className="col">
                            <div className="input-group">
                              <div className="input-group-prepend" />
                              {usernameInput}
                              {usernameValidation}
                            </div>
                          </div>
                        </div>
                        <div className="form-row mb-3">
                          <div className="col">
                            {passwordInput}
                            {passwordValidation}
                          </div>
                        </div>
                        <button className="btn mt-3" id="login-button" type="submit">
                          Register
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-2" />
              </div>
            </div>
        </body>
        <BootstrapScripts />
      </html>
    );
  }
}
module.exports = Login;
