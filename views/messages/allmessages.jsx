var React = require("react");
var DefaultLayout = require('../templates/default/defaultlayout');

class NewMessage extends React.Component {
    render() {

      const allMessages = this.props.messages.map( (message, index) => {
        return <li key={index}>{message.username} - {message.message}</li>
      })

        return (
          <DefaultLayout title="Sign In">
            <h3>TWEEDR:</h3>
            <h4>What Ya Thinking?</h4>
            <ul>
              {allMessages}
            </ul>
          </DefaultLayout>
                )
  }
}

module.exports = NewMessage;
