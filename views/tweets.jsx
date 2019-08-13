var React = require("react");

class Login extends React.Component {
  render() {
    //console.log("tweets.jsx props -tweets");
    //console.log(this.props.tweets);
    //console.log("tweets.jsx props - user");
    //console.log(this.props.user);
    let userProfile = this.props.user.profile;
    let userId = this.props.user.id;


    let tweets = this.props.tweets.map((tweet) => {
      return (<tr><td><img width="25px" height="30px" src={tweet.profile} /></td><td>{tweet.tweetmsg}</td></tr>)
    });

    return (
      <html>
        <head />
        <body>
          <table>
            {tweets}
          </table>

          <form method="POST" action={"/saveTweets"}>
            <table>
              <tr>
                <td>
                  <img src={userProfile} width="25px" height="30px" />
                </td>
                <td>
                  <input name="message" placeholder=""  />
                  <input name="userId" hidden value={userId} />
                  <input name="userProfile" hidden value={userProfile} />
                  <input type="submit" value="Send" />
                </td>
              </tr>
            </table>
          </form>
        </body>
      </html>
    );
  }

}

module.exports = Login;
