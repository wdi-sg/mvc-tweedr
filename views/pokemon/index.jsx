var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.name;
    const tweet=this.props.tweets.map(tweet=>
        {
            console.log(tweet);
            const url="#";
            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
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
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome {name} to Tweeder</h1>
            </div>
            </div>
            {tweet}
                       <div class={"row"}>
                <div class = {"col-12"}>
                    <form method="POST" action="/tweet"  style={{textAlign: "Center"}}>
                    <span>Enter Tweet: </span>
                    <input  id= "tweet" type="text" name="tweet" placeholder="Enter Tweet" required
                            oninvalid="this.setCustomValidity('Enter Tweet Here')"
                            oninput="this.setCustomValidity('')" ></input>
                    <br></br><br></br>
                    <input  id= "tweet" type="text" name="username" placeholder="Enter Tweet" required
                            oninvalid="this.setCustomValidity('Enter Tweet Here')"
                            oninput="this.setCustomValidity('')" value={name} style={{display:"none"}}></input>
                    <input type="submit" value="Submit"></input>
                </form>
                </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;