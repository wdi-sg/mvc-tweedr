var React = require("react");

class TweetCard extends React.Component {
  render() {


    var sha256 = require('js-sha256');
    var SALT = 'bonk';
    var loggedTrue = sha256('true'+SALT);

    let cookies = this.props.cookies;
    console.log("entering tweetcard")
    console.log(cookies.user)
    console.log(cookies.loggedIn)
    console.log("exiting tweetcard")

    if (cookies.loggedIn === loggedTrue){
        return(
            <div className="col col-sm-10 offset-sm-1 col-lg-6 offset-lg-3">
                <div className="card">
                    <div className="card-header text-white bg-primary">Tweet something, {cookies.user}!
                    </div>
                    <div className="card-body bg-light px-2 py-2">




                        <form className="form py-0 px-0" method="POST" action="/tweet">
                            <input type="text" className="card-input form-control" name="content" placeholder="Type here"/>
                            <button className="btn btn-primary" type="submit">Tweet</button>
                        </form>







                    </div>

                </div>
            </div>

        );
    } else {
        return(
            <p>BEGONE STRANGER</p>
        );
    }



  };
}

module.exports = TweetCard;

 // <div className="form py-0 px-0" method="POST" formAction="/tweet">
 //                        <input className="card-input" type="text"/>
 //                        <button className="btn btn-primary" type="submit">Tweet</button>
 //                        </div>