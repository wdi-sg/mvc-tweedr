var React = require("react");


class Tweetcard extends React.Component {
  render() {
    return (
      <div className="tweet-card">
            <p className="name-in-card">{this.props.name}</p>
            <p className="tweet-in-card">{this.props.content}</p>
      </div>
    );
  }
}

module.exports = Tweetcard;