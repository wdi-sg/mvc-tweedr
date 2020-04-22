var React = require("react");

class Home extends React.Component {
  render() {

    const username = this.props.username;

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className='container'>
                <h3 className='text-center'>Welcome {username}</h3>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;