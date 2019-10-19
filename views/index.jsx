var React = require("react");
var Layout = require('./layout')

class Index extends React.Component {
  render() {
          const tweet = this.props.tweets.map((tweet,i)=>{

            let time = tweet.created_at.toString();
        return  <div key = {i}>
                    <li> Tweed: {tweet.tweet}

                        <ul><li> tweeted by <a href={"http://localhost:3000/profiles/" + tweet.id}>{tweet.username}</a></li>
                            <li> tweeted at {time}</li>
                        </ul>

                    </li>
                </div>

    });
    return (
       <Layout>
        <h1> ALL TWEEDS ON TWEEDR </h1>
          <ol>
          {tweet}
          </ol>
        </Layout>
    );
  }
}

module.exports = Index;