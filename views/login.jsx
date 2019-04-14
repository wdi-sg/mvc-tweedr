var React = require("react");
var Header = require('./header');

class Login extends React.Component {
  render() {

    // let tweets = this.props.ccb.map(tweet => {
    //                           return <div>
    //                           <h3>User Id {tweet.user_id}</h3>
    //                           <p>{tweet.username}</p>
    //                           <p>{tweet.tweets}</p>
    //                           </div>
    //                         });

    return (
      <html>
        <Header/>
        <body>
          <h3>LOGIN SIOL</h3>
            <form method="post" action="/login">
            <label for="id">Username</label>
            <input type="text" name="username"/>

            <label for="id">Password</label>
            <input type="text" name="password"/>

            <input type="submit" value="Submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;