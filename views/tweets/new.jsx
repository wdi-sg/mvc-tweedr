var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Add New Tweet</h3>
          <form action="/tweets/new" method="POST">
            <textarea name="content" rows="5" cols="40"/><br/>
            <input type="submit" value="tweet"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
