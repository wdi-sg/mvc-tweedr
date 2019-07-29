var React = require("react");
const sha256 = require('js-sha256');
const SALT = "TwEeDr";


class MyTweeds extends React.Component {
  render() {

    var tweets = this.props.tweedsList.map(tweet =>{

    var url = `/tweedr/${tweet.id}/delete/?_method=delete`

        return (
            <div className="tweet_box">
                <div>{tweet.tweed} <span>- {this.props.username}</span></div>
                <form action={url} method="POST" >
                    <button type="submit" className="del_btn">❌</button>
                </form>
            </div>


        )
    })


function LoggedIn(props) {
  return (<a href="/tweedr/login">Log In</a>)
}

function LoggedOut(props) {
  return (<a href="/tweedr/logout">Log Out</a>)
}

function LogStatus(props) {
  var isLoggedIn = props.isLoggedIn;
   if (isLoggedIn === '') {
    return <LoggedIn />;
  }
  return <LoggedOut />;
}


function UsernameLoggedIn(props) {
  return (<span>Hello, </span>)
}

function UsernameLoggedOut(props) {
  return (<span></span>)
}
function UsernameStatus(props) {
  var isLoggedIn = props.isLoggedIn;
   if (isLoggedIn === '') {
    return <UsernameLoggedOut />;
  }
  return <UsernameLoggedIn />;
}



function UsernameLoggedIn(props) {
  return (<span>Hello, </span>)
}

function UsernameLoggedOut(props) {
  return (<span></span>)
}
function UsernameStatus(props) {
  var isLoggedIn = props.isLoggedIn;
   if (isLoggedIn === '') {
    return <UsernameLoggedOut />;
  }
  return <UsernameLoggedIn />;
}




    return (
      <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" type="text/css" href="/home.css"/>
        </head>
        <body>
            <div className="header">
                <img src="../tweedr_logo.png"/><h1>Tweedr</h1>
                <h4 id="login">
                    <a href="/tweedr/register">Register</a>&nbsp;|&nbsp;<LogStatus isLoggedIn={this.props.cookieUserLogin} />
                </h4>
            </div>
            <div id="username"><UsernameStatus isLoggedIn={this.props.cookieUserLogin}/>&nbsp;<h3>{this.props.username}</h3></div>
            <div className="addtweet_wrapper">
                <form action='/tweedr/addtweed' method="POST">
                    <textarea className="tweetbox" name="tweed"/>
                    <input type="submit" name="submit"/>
                </form>
            </div>
          <div className="wrapper_new">
          {tweets}



            </div>


        </body>
      </html>
    );
  }
}

module.exports = MyTweeds;
