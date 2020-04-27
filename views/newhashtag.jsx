var React = require("react");

class NewHashtag extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>New Hashtag</h3>
          <form method='POST' action='/hashtags'>
            <h4>#hashtag</h4>
            <input type='text' name='content'/>
            <br/><br/>
            <input type='submit' value='Submit'/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = NewHashtag;