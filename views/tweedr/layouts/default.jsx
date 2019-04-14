let React = require("react");
let BootstrapScripts = require("./../components/bootstrap_scripts");
let Head = require('./../components/head')

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>default layout</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          Hello World
          <div className="container">
            <div className="row">
              <div className="col">first col</div>
              <div className="col">second col</div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
module.exports = DefaultLayout;
