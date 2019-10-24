var React = require("react");

class Tweets extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <form action="/tweets" method="POST">
            <h3>Please enter your tweets!</h3>
            <p>
              Title: <input type="text" name="title" />
            </p>
            <p>
              Content: <input type="text" name="content" />
            </p>
            <p>
              <input type="submit" />
            </p>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Tweets;
