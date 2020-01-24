var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <DefaultLayout title="Sign In">
          <h3>Hello</h3>
      </DefaultLayout>
    )
  }
}

module.exports = Home;
