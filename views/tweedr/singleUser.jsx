var React = require("react");
var Default = require("./layout/default");
var Tweetcard = require("./components/tweetcard");

class Singleuser extends React.Component {

  render() {
    let button_url = '/tweedr/'+this.props.cookieUserId+"/change_profile_pic";
    let url = "/tweedr/"+this.props.profile_id+"/follow";
    console.log("here woohoo")
        console.log(this.props.userTweets)
    const listOfTweets = this.props.userTweets===null?"":this.props.userTweets.map(x=>{

        let isUser = parseInt(x.user_id) === parseInt(this.props.cookieUserId)? true:false;
        return <Tweetcard name={x.name} content={x.content} user_id={x.id} create_at = {x.create_at} is_user = {isUser} tweet_id={x.tweet_id} profile_pic={x.profile_pic}/>
    });


    let isUser = parseInt(this.props.profile_id) === parseInt(this.props.cookieUserId)? <form action={button_url}><input type="submit" className="btn btn-primary"value="Change Profile Pic"/></form>:"";
    let followed = this.props.followed? "":<form method="POST"action={url}><input name="user_id" value={this.props.cookieUserId} hidden/><input className="btn btn-primary follow-button" type="submit" value="Follow"/></form>
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>
      <div className="single-user-profile">
        <h2>{this.props.result.name}</h2>
        <div className="single-profile-pic">
            <img  src={this.props.result.profile_pic}/>
            {isUser}
        </div>


        <table className="table table-bordered">
            <tr>
                <th scope="row">Followers</th>
                <td>{this.props.followerCount}</td>
            </tr>
            <tr>
                <th scope="row">Following</th>
                <td>{this.props.followingCount}</td>
            </tr>
        </table>
        {followed}
        </div>
        <div className="tweet-container">
            {listOfTweets}
        </div>


      </Default>
    );
  }
}

module.exports = Singleuser;
