const React = require("react");
const DefaultLayout = require('./layouts/default');
const TweetBlock = require('./components/userTweetBlock');


class Home extends React.Component {
  render() {

    let headerTitle = 'Home | Tweedr';
    let user = this.props.user;


    return (

      <DefaultLayout title={headerTitle} user={user}>
        <p> Hello {user.name}! </p>

        <h4>All Tweets</h4>

      </DefaultLayout>
    );

  }
}

module.exports = Home;