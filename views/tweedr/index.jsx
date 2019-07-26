var React = require("react");
var Default = require("./layout/default");
var Tweetcard = require("./components/tweetcard");

class Home extends React.Component {
  render() {

    const listOfTweets = this.props.result.map(x=>{
        return <Tweetcard name={x.name} content={x.content} user_id={x.id}/>
    })

    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser}>
        <div className="tweet-container">
            {listOfTweets}
        </div>

      </Default>
    );
  }
}

module.exports = Home;
