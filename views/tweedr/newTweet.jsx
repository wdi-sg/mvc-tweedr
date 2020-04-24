var React = require('react');

class NewTweet extends React.Component {
  render() {
    return (
      <html>
      <head>
          <title>
              Newly Created Tweet
          </title>
      </head>
        <body>
          <div>
            <h1>Hey there, you've added a new <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}> TWEET </span>!</h1>
            <h3>Want to see what you have just tweeted? Here you go! </h3>
            <p>This is it >>> <span style={{ color: "#4DDDD0", fontWeight: "lighter"}}> {this.props.newTweet}</span></p>
            <p></p>
            <p></p>
            <h3>To go back to your home page, click here.</h3>
            <a href='/index'>Home</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = NewTweet;