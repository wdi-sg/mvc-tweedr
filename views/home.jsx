var React = require("react");

class Home extends React.Component {
  render() {
    const icon = <img src="./images/twitter.svg" className='icon'></img>

    const username = this.props.username;
    const userID = this.props.userID;

    const hashtagOptions = this.props.hashtags.sort().map(el => {
      return <option value={el.id}>#{el.tags}</option>;
    })


    const url = `/tweet/${userID}`
    let tweet = (
        <div className="new-tweet">
            <form action={url} method='post'>
                <input type="text" name="tweet" placeholder="What's happening?"></input>
                <input type="submit" value="tweet"></input>
                <select className="selectpicker my-4" multiple data-live-search="true" name="hashtag">
                    {hashtagOptions}
                </select>
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
                    <a href="/hashtag">Hashtag</a>
                </div>
                    )

    const favourites = this.props.favourites;
    const allTweets = this.props.tweets;

    const showAllTweets = allTweets.map((el, i) => {
        const profileURL = `/profile/${el.users_id}/${el.username}`
        let favBtnClassname = `input-${i} fav-btn`
        const inputClassname = `input-${i}`

        // Check whether tweet has been favourited
        let favImg = `./images/nofav.svg`;
        for(let n=0; n<favourites.length; n++){
            if(favourites[n].id === el.id){
                favImg = `./images/fav.svg`;
                favBtnClassname = `input-${i} unfav-btn`
            }
        }

        return(
            <div className="tweet-body">
                <p className='tweet-content'>{el.tweet}</p>
                <a className='tweet-user' href={profileURL}>@{el.username}</a>
                <div>
                    <form>
                        <input name="favourite" value={el.id} type="hidden" className={inputClassname}></input>
                        <img src={favImg} className={favBtnClassname}></img>
                    </form>
                </div>
            </div>
            )
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css"/>
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
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;