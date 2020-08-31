var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head/>
        <body>
          <h3>Tweed it like you mean it.</h3>
          <form method="POST" action="/tweeds">
              Your Tweed: <textarea rows="4" cols="50"  name="tweed"/>
              <button type="submit">Tweed it!</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;