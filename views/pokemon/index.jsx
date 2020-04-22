var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props);
    const tweet=this.props.tweets.map(tweet=>
        {
            console.log(tweet);
            const url="#";
            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5"}>
            <p  class={"mt-3"}>Tweet: <a href={url}>{tweet.tweetstext}</a></p>

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
            {tweet}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;