var React = require("react");
var Default = require("./layout/default");
var Tweetcard = require("./components/tweetcard");

class Home extends React.Component {
  render() {

    const listOfTweets = this.props.result===null?"":this.props.result.map(x=>{

        let isUser = parseInt(x.user_id) === parseInt(this.props.cookieUserId)? true:false;
        return <Tweetcard name={x.name} content={x.content} user_id={x.id} create_at = {x.create_at} is_user = {isUser}/>
    })



    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>
        <div className="tweet-container">
            {listOfTweets}
        </div>


      </Default>
    );
  }
}

module.exports = Home;
