var React = require("react");

class Show extends React.Component {
  render() {
        let tweetsArray = this.props.allTweetsOfSelectedUser;
        const list = tweetsArray.map(tweets => {
        return <option value={tweets.user_id}>{tweets.message}</option>
    });
    return (
      <html>
        <head />
            <title>
            Show tweets
            </title>
        <body>
            <h3>Hello</h3>
            <p></p>
            <p></p>
            <p></p>
            <h3>All your tweets can be found here!</h3>
                <div>
                        <select name="tweets_id">
                        {list}
                        </select>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            <h3>Wana make a tweet? Click the below link</h3>
                <a href='/new'>Create new tweet</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Tired of tweeting? Logout from below</h3>
            <a href="/logout">Log out</a>
        </body>
      </html>
    );
  }
}

module.exports = Show;