var React = require("react");

class Profile extends React.Component {
  render() {
    const icon = <img src="./images/twitter.svg" className='icon'></img>

    const userProfileName = this.props.userProfileName;

    const userProfileID = this.props.userProfileTweets[0].users_id;

    const username = this.props.username;

    const userID = this.props.userID;

    const allTweets = this.props.userProfileTweets;

    // Side nav bar
    const userProfileURL = `/profile/${userID}/${username}`
    const tools = (
                <div className="tools">
                    <a href={userProfileURL}>@{userProfileName}</a>
                    <a href="#">Following</a>
                    <a href="#">Followers</a>
                    <a href="#">Likes</a>
                </div>
                    )

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
        const url = `/unfollow/${userProfileID}/${userID}/${userProfileName}/?_method=delete`;

        followForm = (
                <form action={url} method="post">
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
            <link rel="stylesheet" type="text/css" href="./css/profile.css" />
        </head>
        <body>
            <div className="header">
                <h1>TWEEDR</h1>
                {icon}
            </div>
            {tools}
            {followForm}
            <div className="main-body">
                {showAllTweets}
            </div>
        </body>
      </html>
    );
  }
}


module.exports = Profile;