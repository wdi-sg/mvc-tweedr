var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.data);

     let tweets = this.props.data.map(tweet => {
                              return <p>{tweet.tweets}</p>
                            });
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          <li>{this.props.data[0].tweets}</li>
        </body>
      </html>
    );
  }
}

module.exports = Home;