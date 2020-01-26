var React = require("react");

class Home extends React.Component {
  render() {
    
    const allTweets = this.props.tweets.map((item)=>{
      return <li key={item.id}>{item.text}</li>
    })

    return (
      <html>
        <head />
        <body>
          <form action="/" method="POST">
            <input type="text" name="text" placeholder="Tweet"/>
            <input type="submit"/>
          </form>
          <ul>
            {allTweets}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;
