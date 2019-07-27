var React = require("react");


class Tweetcard extends React.Component {
  render() {
    let url = "/tweedr/"+this.props.user_id
    return (
      <div className="tweet-card">
            <p className="name-in-card"><a href={url}>{this.props.name}</a></p>
            <p className="tweet-in-card">{this.props.content}</p>
            <p className="tweet-timing">{this.props.create_at}</p>
      </div>
    );
  }
}

module.exports = Tweetcard;