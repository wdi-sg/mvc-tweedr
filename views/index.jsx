var React = require("react");

class Index extends React.Component {
  render() {
          const tweet = this.props.tweets.map((tweet,i)=>{

            let time = tweet.created_at.toString();
        return  <div>
                    <li key = {i}> Tweed: {tweet.tweet}

                        <ul><li> tweeted by {tweet.username}</li>
                            <li> tweeted at {time}</li>
                        </ul>

                    </li>
                </div>

    });
    return (
      <html>
        <head />
        <body>
        <h1> ALL TWEEDS ON TWEEDR </h1>
          <ol>
          {tweet}
          </ol>
        </body>
      </html>
    );
  }
}

module.exports = Index;