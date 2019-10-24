var React = require("react");

class Alltweets extends React.Component {
  render() {
      let tweetsTitle = this.props.allTweets.map(tweetytitle => {
          return (
              <li>{tweetytitle.title}</li>
          );
      });

      let tweetsContent = this.props.allTweets.map(tweetyContent => {
        return (
            <li>{tweetyContent.content}</li>
        );
    });


    //   let message = <p>Hello!!!!!!!!</p>
      console.log("this is this.props.allTweets!!!!!!!!!", this.props.allTweets)
    return (
      <html>
        <head />
        <body>
       <h1>
           HELLO ALL TWEETS!!!
       </h1>
       {/* <React.Fragment> */}
       <h3>
           ~Tweets Title~
       </h3>
       <ul>
           {tweetsTitle}
       </ul>
       <h3>
           ~Tweets Content~
       </h3>
       <ul>
           {tweetsContent}
       </ul>
       {/* </React.Fragment> */}
        </body>
      </html>
    );
  }
}

module.exports = Alltweets;
