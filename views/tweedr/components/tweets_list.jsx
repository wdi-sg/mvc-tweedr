let React = require("react");

class TweetsList extends React.Component {
    render() {
        //allTweats passed here must have 
        let tweets = this.props.allTweets;
        console.log(tweets);
        let tweetsHTML = tweets.map(tweet => {
          return (
            <div key={tweet.id}>
              <h1>{tweet.username}</h1>
              <h2>{tweet.tweet}</h2>
              <h2>{tweet.date}</h2>
            </div>
          );
        });
    
        return (
            <div>
                {tweetsHTML}
            </div>
        );
      }
    }
module.exports = TweetsList;
