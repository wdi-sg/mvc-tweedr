var React = require("react");
var Layout = require("./layout");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (<Layout>
              <h3>Hello, you are working on the tweedr app</h3>
              <h2>You should see a list of tweets below</h2>
            </Layout>);
  }
}

module.exports = Home;
