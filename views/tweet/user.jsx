var React = require("react");
class User extends React.Component {
  render() {
    let tweets = this.props.tweets;
    let tweetsList = tweets.map(tweetsData => {
        return(
            <tr>
                <td>{tweetsData.id}</td>
                <td>{tweetsData.tweet}</td>
                <td>{tweetsData.user_id}</td>
            </tr>
        )
    })
    return (
      <html>
        <head/>
        <body>
          <h1>Welcome to your tweetdr page!!</h1>
            <table>
                <tr>
                    <th>All Tweets</th>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>Tweet Messasge</td>
                    <td>User ID</td>
                </tr>
                    {tweetsList}
            </table>
            <table>
                <tr>
                    <th>All Your Tweets</th>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>Tweet Messasge</td>
                    <td>User ID</td>
                </tr>
                    {tweetsList}
            </table>

        </body>
      </html>
    );
  }
}
module.exports = User;