var React = require("react");
var DefaultLayout = require('../templates/default/defaultlayout');

class IndividualMessage extends React.Component {
    render() {
      console.log(this.props.message)
      const title = `Another thrilling message by ${this.props.message.username}.`
        return (
          <DefaultLayout title={title}>
            <h3>TWEEDR:</h3>
            <h4>{this.props.message.username} wrote:</h4>
            <p>{this.props.message.message}</p>
            <p><small>On some date at some time.</small></p>
          </DefaultLayout>
                )
  }
}

module.exports = IndividualMessage;
