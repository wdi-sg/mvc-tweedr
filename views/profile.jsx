var React = require("react");

class Home extends React.Component {
  render() {

    const userProfileName = this.props.userProfileName;

    const userProfileID = this.props.userProfileTweets[0].users_id;

    const username = this.props.username;

    const userID = this.props.userID;

    const header = <p>{username}</p>

    const allTweets = this.props.userProfileTweets;

    // Tweet body
    const showAllTweets = allTweets.map(el => {
        return(
            <div className="tweet-body">
                <p className='tweet-content'>{el.tweet}</p>
            </div>
            )
    })

    let followForm;

    if(this.props.followingRelationship){
        followForm = (
                <form action='/unfollow/?_method=delete' method='post'>
                    <input type="hidden" name="userProfileID" value={userProfileID}></input>
                    <input type="hidden" name="userProfileName" value={userProfileName}></input>
                    <input type="submit" value="unfollow"></input>
                </form>
                )
    }else{
        followForm = (
                <form action='/follow' method='post'>
                    <input type="hidden" name="userProfileID" value={userProfileID}></input>
                    <input type="hidden" name="userProfileName" value={userProfileName}></input>
                    <input type="submit" value="follow"></input>
                </form>
                )
    }

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="./css/home.css" />
        </head>
        <body>
            <div>
                <h1>TWEEDR</h1>
                {header}
            </div>
            <div>
                <h2>{userProfileName}</h2>
                {followForm}
            </div>
            <div className="all-tweet-body">
                {showAllTweets}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;