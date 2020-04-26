var React = require("react");

class fav extends React.Component {
  render() {
    var fave = this.props.tweeteds.map (fav =>{
        return <li>{fav.tweet}</li>
    })
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Enter the new fav tweet's id!!</h1>
                <div>
                    <form action='/fav' method="POST">
                        <p>
                            Tweet id!: <input name="favTweet"/>
                        </p>
                        <br></br>
                        <p>
                            All your favourited tweets!
                        </p>
                            <ol>
                                {fave}
                            </ol>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Add to fav!!"></input>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = fav;