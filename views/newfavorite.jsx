var React = require('react');
class Newfavorite extends React.Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <div>
            <h1>Favorite your tweed!</h1>
          </div>
          <div>
            <div>
              <form method="POST" action="/favorite">
                <div>
                  Hashtag:
                  <input type="text" name="favorite"></input>
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

module.exports = Newfavorite;