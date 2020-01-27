var React = require("react");
const Header = require("./header")

class Home extends React.Component {
  render() {

    this.props.tweets.reverse()
    
    const allTweets = this.props.tweets.map((item)=>{
      return <div key={item.name} className="tweet">{item.name}: {item.text}</div>
    })

    return (
      <Header>
          
          <div className="tweet-list">
          <form action="/" method="POST">
            <input type="text" name="text" placeholder="Tweed" className="tweet-input" maxLength="140"/>
            <input type="submit"/>
          </form>
            {allTweets}
          </div>
      </Header>
    );
  }
}

module.exports = Home;
