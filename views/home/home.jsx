var React = require("react");

class Home extends React.Component {
  render() {
    console.log("home jsx: ");
    console.log(this.props.object);
    const results = this.props.object;
    const tweets = this.props.object.map(item => {
      return (
        <div class="container">
          <h4>{item.username}</h4>
          <p>{item.content}</p>
        </div>
      );
    })

    return (
      <html>
        <head />
        <body>
          <h1>Tweedr</h1>
          <h3>Showing all tweeds: </h3>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Home;
