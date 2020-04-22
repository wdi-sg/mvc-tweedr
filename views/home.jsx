var React = require("react");
const Layout = require("./layout");

class Home extends React.Component {
  render() {
    // console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
            <Layout/>
        </body>
      </html>
    );
  }
}

module.exports = Home;
