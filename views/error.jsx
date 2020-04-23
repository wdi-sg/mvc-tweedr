var React = require("react");
import Nav from "./components/nav";
import Head from "./components/header";
import BootstrapJs from "./components/bootstrap-js";


class Error extends React.Component {
  render() {
    const error = this.props.errorMsg

    return (
      <html>
        <Head />
        <body>
          <Nav />
          <div className="jumbotron bg-dark">
          <span className="text-danger">
          {error}
          </span>
          </div>

          <BootstrapJs />
        </body>
      </html>
    );
  }
}

module.exports = Error;
