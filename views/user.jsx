const React = require("react");

class Users extends React.Component {
  render() {

    let username = this.props.userTweets[0].username;
    const userTweetsList = this.props.userTweets.map(userTweet => {
        return (<div className='col-2' style={{border:"1px solid gainsboro", borderRadius:"5px", padding:"10px"}}>
                    <p>{userTweet.tweet}</p>
                </div>)
    })

    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
            </head>
            <body>
                <br/>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <h2>{username}'s Tweets</h2>
                    </div>
                    <br/>
                    <div className='row justify-content-center'>
                        {userTweetsList}
                    </div>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    <button className='btn btn-danger'><a href='/home/users' className='text-white text-decoration-none'>Back to Tweeders List</a></button>
                </div>
            </body>
        </html>
    );
  }
}

module.exports = Users;