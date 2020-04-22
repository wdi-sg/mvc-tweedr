var React = require("react");
var Layout = require("./components/layout.jsx")


class Duplicate extends React.Component {
  render() {
    console.log(this.props.types);

    return (
      <Layout>
      <p>It appears that someone else has taken your user name!</p>
      <p>Don't worry, you can use another username. You will be automatically redirected to the register page in 3 seconds</p>
      <script type="text/Javascript" src="/js/redirect.js"></script>
      </Layout>
    );
  }
}

module.exports = Duplicate;
