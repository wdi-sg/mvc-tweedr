const React = require("react");

class Show_Hashtag extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <br/>
            <div className='container'>
                <h4 className='text-center'>Hashtag created!</h4>
                <br/>
                <div className='row justify-content-center'>
                    <h3>{this.props.hashtag.hashtag}</h3>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    <button className='btn btn-danger'><a href='/home' className='text-white text-decoration-none'>Back to Home</a></button>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Show_Hashtag;