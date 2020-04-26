var React = require("react");

class fav extends React.Component {
  render() {
    var fave = this.props.tweeteds.map (fav =>{
        return (<li>
                <p>
                    Tweet: {fav.tweet}
                    <button className ="addFav" >{fav.id}</button>
                </p>
            </li>)

//                <div>
//                <li>{fav.tweet}</li>
//                <button className = 'addFav'> {fav.id}</button>
//                </div>
    })
    return (
      <html>
        <head />
        <body>
            <div>
                <h1>Enter the new fav tweet's id!!</h1>
                <div>
                        <p>
                            All your favourited tweets!
                        </p>
                            <ol>
                                {fave}
                            </ol>
                        <br></br>
                </div>
            </div>
            <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = fav;