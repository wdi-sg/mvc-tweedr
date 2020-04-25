const React = require("react");

class New_Hashtag extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <br/>
                <h2 className='text-center'>New Hashtag</h2>
            </div>
            <br/>
            <div className='row justify-content-center'>
                <form method='POST' action='/home/hashtag'>
                    <h5 className='text-center'>Create a new hashtag!</h5>
                    <div className='row justify-content-center'>
                        <input type='text' name='hashtag' value='#'/>
                    </div>
                    <br/>
                    <br/>
                    <div className='row justify-content-center'>
                        <input type='submit' value='Submit' className='btn btn-primary'/>
                    </div>
                    <br/>
                    <div className='row justify-content-center'>
                        <button className='btn btn-danger'><a href='/home/' className='text-white text-decoration-none'>Back to Home</a></button>
                    </div>
                </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = New_Hashtag;