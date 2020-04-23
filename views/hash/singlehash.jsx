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
        <body>




          <div class={"container mt-3 mb-5"}>
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