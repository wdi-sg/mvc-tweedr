var React = require("react");

class All_Tweets extends React.Component {
  render() {

    const allTweets = this.props.allTweets;
    const allTweetsList = allTweets.map(tweet => {
        return (<div className='col-4' style={{border: "1px solid gainsboro", margin: "10px", height: "130px"}}>

                    <div className='row' style={{padding: "5px 0 0 5px"}}>
                        <h5>{tweet.username}</h5>
                    </div>
                    <div className='row' style={{borderBottom: "1px solid grey", padding: "0 0 5px 5px"}}>
                        <p>@{tweet.username}</p>
                    </div>
                    <div className='row' style={{padding: "5px 0 5px 5px"}}>
                        <p>{tweet.tweet}</p>
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
                <h2 className='text-center'>All Tweets</h2>
            </div>
            <br/>
            <div className='row justify-content-center'>
                {allTweetsList}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = All_Tweets;