var React = require('react');
class Newtweet extends React.Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div>
            <h1>New tweet</h1>
          </div>
          <div>
            <div>
              <form method="POST" action="/tweet">
                <div>
                  Name:
                  <input type="text" name="message"></input>
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

module.exports = Newtweet;