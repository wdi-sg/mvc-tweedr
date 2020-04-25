const React = require("react");

class Hashtag extends React.Component {
  render() {

    const hashtag = this.props.tweets[0].hashtag;
    const allTweets = this.props.tweets.map(tweet => {
        let userProfile = '/home/users/' + tweet.user_id
        return (<div className='col-3' style={{border: "1px solid gainsboro", margin: "10px"}}>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='row' style={{padding: "5px 0 0 5px"}}>
                                <h6>{tweet.username}</h6>
                            </div>
                            <div className='row' style={{padding: "0 0 5px 5px"}}>
                                <a href={userProfile} className='text-decoration-none'>@{tweet.username}</a>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{borderTop:"1px solid grey",padding: "5px 0 5px 5px"}}>
                        <h5>{tweet.tweet}</h5>
                    </div>
                    <div className='row' style={{padding: "0 0 5px 5px"}}>
                        <h6>{tweet.hashtag}</h6>
                    </div>
                </div>)
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <br/>
                <h2 className='text-center'>All Tweets with {hashtag}</h2>
                <br/>
                <div className='row justify-content-center'>
                    <button className='btn btn-danger'><a href='/home' className='text-white text-decoration-none'>Back to Home</a></button>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    {allTweets}
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Hashtag;