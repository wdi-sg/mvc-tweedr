var React = require("react");
var DefaultLayout = request("default");

class Home extends React.Component {
  render() {
    console.log(this.props.tweets);
    let allTweets = this.props.allTweets.map ( (tweet) => {
        // do things
    });
    return (
      <DefaultLayout>
          <h3>Hello</h3>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
