var React = require("react");
var Layout = require("./components/layout.jsx")
var Tweetcard = require("./components/component-tweetcard.jsx")

class Homepage extends React.Component {
  render() {
    console.log(this.props.types);
    var tweed =
    <form action="/sendtweed" method="POST">
      <textarea cols="50" name="tweed" rows="3" maxLength="150">
      </textarea>
      <input type="submit" value="Tweed!"/>
    </form>
    if (this.props.data){
      var followable = this.props.data.queryResult.map((obj)=>{
        return <option value={obj.id}>{obj.name}</option>
      })
    if (this.props.cookies.username){
      var welcomeMessage = <div><h1>Welcome {this.props.cookies.username}!</h1><p>Let's start tweeding!</p></div>
      var tweedPage = <div>{tweed}</div>
    }else{
      var welcomeMessage = <div><h1>Welcome guest!</h1><p>Please <a href="/register">register</a> before you can start tweeding!</p><p><a href="/login">Log in</a> here if you are an existing user</p></div>
    }
    var followerTweets, followedTweets;
    if (this.props.data.secondResult){
      followerTweets = this.props.data.secondResult.map((obj)=>{
        return <Tweetcard name={obj.name} tweet={obj.tweet}></Tweetcard>
      })
    }
    if (this.props.data.thirdResult){
      followedTweets = this.props.data.thirdResult.map((obj)=>{
        return <Tweetcard name={obj.name} tweet={obj.tweet}></Tweetcard>
      })
    }

    var displayMessage =
    <div>
    {welcomeMessage}
    {tweedPage}
    <div>
    <p>List of people you can follow</p>
    <form action="/follow" method="POST">
    <select name={this.props.cookies.username}>
    {followable}
    // {followedTweets}
    </select>
    <input type="submit" value="Follow!"/>
    </form>
    <h2>Tweets of those following you</h2>
    {followerTweets}
    <h2>Tweets of those you are following</h2>
    {followedTweets}
    <h2>Your past tweets</h2>
    </div>
    </div>

  }else{
    var displayMessage =
    <div>
    <h1>Hey!</h1>
    <p>It appears that you are not logged in</p>
    <p>Click <a href="/login">here</a> to log in, or <a href="/register">here</a> to register a new account with us!</p>
    </div>
  }
// {yourTweets}
    return (
      <Layout>
      {displayMessage}
      </Layout>
    );
  }
}

module.exports = Homepage;
