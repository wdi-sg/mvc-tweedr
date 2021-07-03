var React = require('react');

class TweetsList extends React.Component {
  render() {
    let tweetsList = this.props.tweetsList.map(tweet => {

        return(


                <div className="card">
                    <div className="card-header text-white bg-primary">{tweet.name}
                    </div>
                    <div className="card-body bg-light px-2 py-2">
                        <div className="card-text py-3 px-4">{tweet.content}</div>
                    </div>

                </div>



        )
    })


    return (
      <div className="col col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 tweet-wrapper">
        {tweetsList}
      </div>
    );
  }
}
module.exports = TweetsList;
 // <div className="tweet-wrapper">
 //                <p>TWEET: {tweet.content}</p>
 //                <p>USER ID: {tweet.userid}</p>
 //            </div>