var React = require("react");

class NewTweed extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <p>New Tweed</p>
          <form method='POST' action='/tweeds'>
            <p>Message</p>
            <input type='textarea' name='content'/>
            <br/>
            <input type='submit' value='Submit'/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = NewTweed;