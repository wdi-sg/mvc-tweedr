var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.users.userDetails.name;
    const tweet=this.props.users.tweets.map(tweet=>
        {
            console.log(tweet);

            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <p  class={"mt-3"}>{tweet.tweetstext}</p>

            </div>
            </div>


        });
        const follower=this.props.users.followers.map(follower=>
        {
            console.log(follower);
            let url= follower.name
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
        <body>




          <div class={"container mt-3"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome {name} to Tweeder</h1>
            </div>
            </div>
            <div class="row">
            <div class="col-12">
            <h2>Your Tweet</h2>
            </div>
            </div>
            {tweet}

            <div class="row">
            <div class="col-12">
            <h2>Following</h2>
            </div>
            </div>
            {follower}

          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;