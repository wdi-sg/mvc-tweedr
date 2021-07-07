var React = require("react");

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

module.exports = Onetweet;