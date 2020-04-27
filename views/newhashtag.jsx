var React = require('react');
class Newhashtag extends React.Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div>
            <h1>Add a new hashtag!</h1>
          </div>
          <div>
            <div>
              <form method="POST" action="/hashtag">
                <div>
                  Hashtag:
                  <input type="text" name="hashtag"></input>
                </div>
                <div>
                  <input type="submit" value="submit"></input>
                </div>
              </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Newhashtag;