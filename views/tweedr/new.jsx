var React = require("react");

class NewTweed extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>New Tweed</h3>
          <form method='POST' action='/tweeds'>
            <h4>Message</h4>
            <input type='textarea' name='content'/>
            <br/><br/>
            <input type='submit' value='Submit'/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = NewTweed;