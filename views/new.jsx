var React = require("react");
class newTweet extends React.Component {
  render() 
  {
    return (
      <html>
        <body>
          <div>
            <form method="POST" action="/newTweet">
                  <p>New Tweed :</p>
                  <input type="text" name="content"/>
                  <p><button type="submit">Send</button></p>
              </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = newTweet;
