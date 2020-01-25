var React = require("react");

class Home extends React.Component {
  render() {
        let namesArray = this.props.allTweedr;
        const list = namesArray.map(username => {
        return <option value={username.id}>{username.name}</option>
    });
    console.log(this.props.name);
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
            <select name="song_id">
          {list}
            </select>
            <a href="/logout">Log out</a>
        </body>
      </html>
    );
  }
}

module.exports = Home;