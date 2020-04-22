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
                <h2 className='text-center'>Welcome {username}</h2>
            </div>
            <br/>
            <div className='row justify-content-center'>
                <form method='POST' action='/user/tweet'>
                    <h5 className='text-center'>Write a Tweet</h5>
                    <input type='text' name='tweet'/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;