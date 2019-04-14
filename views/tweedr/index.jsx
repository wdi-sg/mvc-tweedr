let React = require('react');

class Index extends React.Component {
render() {
let tweets = this.props.allTweets;
console.log(tweets);
let tweetsHTML = tweets.map(tweet => {
    return <div key={tweet.id}>
    <h1>{tweet.username}</h1>
        <h2>{tweet.tweet}</h2>
        <h2>{tweet.date}</h2>
    </div>
});

return (
<html>
<head>
<meta charSet="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<title>Tweedr</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
Tweedr World
<div>{tweetsHTML}</div>
</body>
</html>
);}
}
module.exports = Index;