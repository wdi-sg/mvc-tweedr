const React = require("react");
const DefaultLayout = require('./layouts/default');
const TweetBlock = require('./components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Trending | Tweedr';
    let user = this.props.user;
    let tweets = this.props.tweets;


    return (

      <DefaultLayout title={headerTitle} user={user}>

        <h4>All Tweets</h4>
        <TweetBlock tweets={tweets}/>

      </DefaultLayout>
    );

  }
}

module.exports = Home;