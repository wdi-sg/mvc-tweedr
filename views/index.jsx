var React = require("react");

class Home extends React.Component {
  render() {

    this.props.tweets.reverse()
    
    const allTweets = this.props.tweets.map((item)=>{
      return <div key={item.id} className="tweet">{item.user_id}{item.text}</div>
    })

    return (
      <html>
          <head>
            <link rel="stylesheet" href="../css/style.css"/>
          </head>
        <body>
          
          <div className="tweet-list">
          <form action="/" method="POST">
            <input type="text" name="text" placeholder="Tweet" className="tweet-input" maxLength="140"/>
            <input type="submit"/>
          </form>
            {allTweets}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
