var React = require("react");

class New extends React.Component {
  render() {
    const user_id = parseInt(this.props.id);
    return (
      <html>
        <head/>
        <body>
          <h1>Create New Tweet</h1>
          <form action="/" method="POST">
            Tweet: <input type="text" name="tweets" /><br />
            <input type="hidden" name="user_id" value={user_id}/>
            <input type="submit" value="Post" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;