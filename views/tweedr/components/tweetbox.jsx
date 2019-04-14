let React = require("react");

class TweetBox extends React.Component {
  render() {
      let user_id = this.props.userId;
    return (
      <form action="/tweet/create" method="post">
        <div className="form-group">
          <textarea className="form-control" id="tweet-form" rows="3" placeholder="What's Happening?" name="tweet"/>
        </div>
        <input name="userId" value={user_id} type="hidden"/>
        <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary px-3" id="tweet-button">Tweet</button>
        </div>
      </form>
    );
  }
}
module.exports = TweetBox;
