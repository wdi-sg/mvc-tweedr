var React = require("react");
var Layout = require('./layout')

class Profile extends React.Component {
  render() {



    const tweets = this.props.tweets.map((tweet,i)=>{
         let time = tweet.created_at.toString()
        return <li key = {i}>{tweet.tweet}, tweeted at: {time}</li>
    })


    return (
      <Layout>
        <h1> LOOK IT'S YOUR PROFILE, {this.props.name} </h1>
        <br/>
        <h2> Your tweets:</h2>
        <ul>
            {tweets}

        </ul>

     </Layout>
    );
  }
}

module.exports = Profile;