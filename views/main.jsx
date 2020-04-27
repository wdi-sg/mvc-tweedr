const React = require("react");

class Main extends React.Component {
  render() {

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <br/>
                <h3 className='text-center'>Welcome to Tweedr</h3>
                <br/>
                <div className='row justify-content-center'>
                    <button className='btn btn-primary'><a href='/login/' className='text-white text-decoration-none'>Login</a></button>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Main;