var React = require("react");

class Signout extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>You have signed out</h3>
          <form action="/login" method="GET">
            <button type="submit">Log In</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Signout;
