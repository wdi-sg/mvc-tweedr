var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.users.userDetails.name;
    const tweet=this.props.users.tweets.map(tweet=>
        {
            console.log(tweet);
            let url = "/tweet/"+tweet.id
            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h5  class={"mt-3"}><a href={url}>{tweet.tweetstext}</a></h5>
             <button class="favorite" value={tweet.id}>Add to Favorite</button>

            </div>
            </div>


        });
        const follower=this.props.users.followers.map(follower=>
        {
            console.log(follower);
            let url= follower.id
            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <p  class={"mt-3"}><a href={url}>{follower.name}</a></p>

            </div>
            </div>


        });
    //console.log(this.props.types);
    return (
      <html>
        <head />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
        <link rel={"stylesheet"} href={"/style/style.css"}></link>
        <body>




          <div class={"container tweetBox"}>
            <div class={"row my-auto"}>
            <div class={"col-12 m-3 text-center"}>
            <h1  class={"mt-3"}>Welcome {this.props.personalUserName}  to {name}'s Tweeder</h1>
            </div>
            </div>
            <div class="row">
            <div class="col-12">
            <h2>{name}'s Tweed:</h2>
            </div>
            </div>
            {tweet}

            <div class="row">
            <div class="col-12">
            <h2>{name} following:</h2>
            </div>
            </div>
            {follower}

          </div>
                    <script src="/script/home.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;