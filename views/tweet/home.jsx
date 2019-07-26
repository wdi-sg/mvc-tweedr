var React = require("react");

class Home extends React.Component {
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
          <h3>Welcome to your tweetdr page!!</h3>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Tweet Messasge</th>
                    <th>User ID</th>
                </tr>
                    {tweetsList}
            </table>
        </body>
      </html>
    );
  }
}

module.exports = Home;