var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head/>
            <title>Create a new Tweet!</title>
        <body>
            <h1>Wana add a <span style={{ color: "#4D8EDD", fontWeight: "lighter"}}>NEW</span> Tweet? Do it here!</h1>
            <form method="POST" action="/new">
                <p>User Id<input type="text" name="userId" value={this.props.user_id}/></p>
                <p>Message: <textarea type="text" name="message" rows="4" cols="50" required></textarea></p>
                <input type="submit" value="Submit"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = New;