var React = require('react');

class TweetsList extends React.Component {
  render() {

    let tweetsList = this.props.tweetsList.map(tweet => {

        return(
            <div className="tweet-wrapper">
                <p>TWEET: {tweet.content}</p>
                <p>USER ID: {tweet.userid}</p>
            </div>
        )
    })


    return (
      <div>
        {tweetsList}
      </div>
    );
  }
}
module.exports = TweetsList;