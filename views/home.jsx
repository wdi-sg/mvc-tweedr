var React = require("react");

class Home extends React.Component {
  render() {
    const icon = <img src="./images/twitter.svg" className='icon'></img>

    const username = this.props.username;
    const userID = this.props.userID;

    const url = `/tweet/${userID}`
    let tweet = (
        <div className="new-tweet">
            <form action={url} method='post'>
                <input type="text" name="tweet" placeholder="What's happening?"></input>
                <input type="submit" value="tweet"></input>
            </form>
        </div>
            )

    let profilePicURL = `/profilepic/${userID}`
    let profilePic = (
                    <form action={profilePicURL} method='POST' enctype="multipart/form-data">
                        <div className='input-picture'>
                            <label for="profile_picture" id="label">Change profile picture:</label>
                            <input type="file" id="profile_picture" name="profile_picture" className="profile-pic" style={{"height":"1px"}, {"width":"1px"}} accept="image/*"></input>
                        </div>
                        <input type="submit" value="Upload"></input>
                    </form>
                    )

    const userProfileURL = `/profile/${userID}/${username}`
    const tools = (
                <div className="tools">
                    {profilePic}
                    <a href={userProfileURL}>@{username}</a>
                    <a href="#">Following</a>
                    <a href="#">Followers</a>
                    <a href="#">Likes</a>
                </div>
                    )

    const allTweets = this.props.tweets;

    const showAllTweets = allTweets.map((el, i) => {
        console.log(el)
        const profileURL = `/profile/${el.users_id}/${el.username}`
        const favBtnClassname = `fav-btn input-${i}`
        const inputClassname = `input-${i}`
        return(
            <div className="tweet-body">
                <p className='tweet-content'>{el.tweet}</p>
                <a className='tweet-user' href={profileURL}>@{el.username}</a>
                <div>
                    <form>
                        <input name="favourite" value={el.id} type="hidden" className={inputClassname}></input>
                        <button type="button" className={favBtnClassname}>fav</button>
                    </form>
                </div>
            </div>
            )
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <link rel="stylesheet" type="text/css" href="./css/home.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </head>
        <body>
            <div className="header">
                <h1>TWEEDR</h1>
                {icon}
            </div>
            {tools}
            <div className="main-body">
                {tweet}
                {showAllTweets}
            </div>
            <script src="./script/index.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;