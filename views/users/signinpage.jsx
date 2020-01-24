var React = require("react");
var DefaultLayout = require('../templates/default/defaultlayout');

class SignInPage extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <DefaultLayout title="Sign In">
          <h3>Sign In Page</h3>
      </DefaultLayout>
    )
  }
}

module.exports = SignInPage;
