var React = require("react");

class singlehash extends React.Component {
  render() {
    console.log(this.props);
    const hash = this.props.hash.text;
    let buttonSwitch="";

        const tweet=this.props.hash.tweet.map(tweet=>
        {
            console.log(tweet);
            const url="/tweet/"+tweet.tweets_id;
            return <div class={"col-12 mt-2 text-center"}>
            <p><a href={url}>{tweet.tweetstext}</a></p>
            </div>



        });

    //console.log(this.props.types);
    return (
      <html>
        <head />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"style/style.css"}></link>
        <body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/login">Login</a>
      <a class="nav-item nav-link" href="/register">Register</a>
      <a class="nav-item nav-link" href="/user">Users</a>
       <a class="nav-item nav-link" href="/tweet">Tweeds</a>
        <a class="nav-item nav-link" href="/hash">Hash</a>
        <a class="nav-item nav-link" href="/favorite">Favorites</a>
    </div>
  </div>
</nav>



          <div class={"container mt-3 mb-5 tweetBox"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Tweet realted to {hash}</h1>
            </div>
            </div>
            <div class={"row mt-5"}>
                {tweet}
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = singlehash;