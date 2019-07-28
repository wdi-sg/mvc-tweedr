const React = require('react');
const DefaultLayout = require('./layouts/default');

class Login extends React.Component {
  render() {

    let headerTitle = "Login | Tweedr";

    let tweetURL = `/newtweet`;
    let user = this.props.user;
    let pl = `What's on your mind, ${user.name}?`;

    return (

      <DefaultLayout title={headerTitle} user={user}>

        <h1>New Tweet</h1>

        <form method="POST" action={tweetURL}>
            <textarea type={"text"} name={"detail"} placeholder={pl} rows={"4"} cols={"50"} required/>
            <input type={"hidden"} name={"id"} value={user.id}/>
            <br/>
            <br/>
            <button type="submit">Share</button>
        </form>
        <br/>

      </DefaultLayout>
    );
  }
}

module.exports = Login;