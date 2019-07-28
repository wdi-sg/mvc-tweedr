var React = require("react");
var HeaderBar = require('../components/headerbar.jsx');
var TweetBar = require('../components/tweetbar.jsx');

class Home extends React.Component {
    render() {
        console.log(this.props);
        let tweetsQuery = this.props.allResults.map((tweet) => {
            return <div className="card mb-3" style={{maxWidth:'100%'}}>
              <div className="row no-gutters">
                <div className="col-md-2 card" style={{backgroundImage:'URL('+tweet.avatar+')'}}>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{tweet.screen_name},</h3>
                    <h5 className="card-text">{tweet.tweetmsg}</h5>
                  </div>
                </div>
              </div>
            </div>;
        });
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                    <link rel="stylesheet" href="css/styles.css"/>
                </head>
                <body>
                    <HeaderBar/>
                    <div className="d-flex justify-content-center">

                        <div className="main_container">

                        <h1 className="text-center">TWEEDR</h1>
                        <h2 className="text-center">What Ya Thinking?</h2>
                        <TweetBar/>
                            <div className="row">
                            <div className="col-md-1">
                                </div>
                                <div className="col-md-10 box">
                                {tweetsQuery}
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = Home;
