const React = require("react");

class Show_Tweet extends React.Component {
  render() {

    const tweet = this.props.tweet;
    const username = this.props.username;
    const userId = this.props.userId;

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <br/>
            <div className='container'>
                <h4 className='text-center'>Tweeted!</h4>
                <div className='row justify-content-center'>
                    <div className='col-4' style={{border: "1px solid gainsboro", margin: "10px"}}>
                        <div className='row' style={{padding: "5px 0 0 5px"}}>
                            <h6>{username}</h6>
                        </div>
                        <div className='row' style={{borderBottom: "1px solid grey", padding: "0 0 5px 5px"}}>
                            <p>@{username}</p>
                        </div>
                        <div className='row' style={{padding: "5px 0 5px 5px"}}>
                            <h5>{tweet}</h5>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    <button className='btn btn-primary'><a href='/home' className='text-white text-decoration-none'>Back to Home</a></button>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Show_Tweet;