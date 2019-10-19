var React = require("react");

class Index extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
        <h1> LOOK IT'S YOUR PROFILE, {this.props.name} </h1>

        </body>
      </html>
    );
  }
}

module.exports = Index;