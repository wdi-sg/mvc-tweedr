var React = require("react");

class NewTweet extends React.Component {

  render() {
    // console.log(this.props.types);
    return (
        <html>
          <head />
            <body>
              <form method="POST" action="/tweedr">
                <h1>ADD YOUR NEW TWEET</h1>
                  HERE: <input type="text" name="tweet"/>
                  <br/>
                  <input type="submit" value="SUBMIT"/>
              </form>
            </body>
        </html>
    );
  }
}

module.exports = NewTweet;