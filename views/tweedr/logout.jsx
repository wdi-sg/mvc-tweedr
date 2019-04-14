let React = require("react");
let Head = require("./components/head");
let BootstrapScripts = require("./components/bootstrap_scripts");
let Header = require("./components/header");

class Logout extends React.Component {
  render() {
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
                    <div id="login-header">You have been Logged Out</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        <BootstrapScripts />
      </html>
    );
  }
}
module.exports = Logout;
