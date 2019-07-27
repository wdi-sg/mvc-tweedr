var React = require("react");


class Tweetcard extends React.Component {
  render() {
    let url = "/tweedr/"+this.props.user_id
    let buttonDropdown = this.props.is_user?<div class="btn-group btn-group-sm edit-button " role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle btn btn-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">Edit</a>
                  <a class="dropdown-item" href="#">Delete</a>
                </div>
              </div> : "";
    return (
      <div className="tweet-card">
            <p className="name-in-card"><a href={url}>{this.props.name}</a></p>
            <p className="tweet-in-card">{this.props.content}</p>
            <p className="tweet-timing">{this.props.create_at}</p>
            {buttonDropdown}
      </div>
    );
  }
}

module.exports = Tweetcard;