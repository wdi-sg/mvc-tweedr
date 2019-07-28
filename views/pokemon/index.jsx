var React = require("react");
const Layout = require('./layout.jsx');

class Onetweet extends React.Component {
  render() {
    console.log('creating an artist data li?');
    return (
        <li>
            Name: {this.props.tweetData.name}<br />
            {this.props.tweetData.content}<br />
        </li>
    );
  }
}

class Home extends React.Component {
  render() {
    console.log(this.props.allTweets);
    let itemElements = this.props.allTweets.map((tweet) => {
                return <Onetweet tweetData={tweet}> </Onetweet>
            });
    return (
        <Layout>
            <h3>Hello</h3>
            <ul>
                {itemElements}
            </ul>
        </Layout>
    );
  }
}

module.exports = Home;