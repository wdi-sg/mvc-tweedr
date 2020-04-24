var React = require("react");

class alltweets extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.name;

        const tweet=this.props.tweets.map(tweet=>
        {
            console.log(tweet);
            const url="/tweet/"+tweet.id;
            return <div class={"col-3 mt-2 text-center"}>
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




          <div class={"container mt-3 mb-5"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3 test"}>Welcome {name} to Tweeder. These are all the tweets.</h1>
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

module.exports = alltweets;