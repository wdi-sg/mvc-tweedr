const React = require('react');
const FrontLayout = require('./layouts/frontpage');

class Index extends React.Component {
  render() {

    let headerTitle = "Tweedr: Where Tweeds Happen";

    let loginURL = `/login`;
    let registerURL = `/register`;

    return (

      <FrontLayout title={headerTitle}>

        <h1>Tweedr: Where Tweeds are Made</h1>
        <form method="POST" action={loginURL}>
            <p>Name:</p>
            <input type={"text"} name={"name"} required/>
            <p>Password:</p>
            <input type={"text"} name={"password"} required/>
            <br/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
            <br/>
            <br/>
        <h3>See what's happening in the world</h3>
        <h5>Join Tweedr today</h5>
        <form action={registerURL}>
            <input type="submit" value="Sign up"/>
        </form>

      </FrontLayout>
    );
  }
}

module.exports = Index;