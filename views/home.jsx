const React = require("react");

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
                <br/>
                <h2 className='text-center'>Welcome {username}!</h2>
                <br/>
                <div className='row justify-content-center'>
                    <div className='col-2 d-flex justify-content-end'>
                        <button className='btn btn-primary'><a href='/home/tweet/new'className='text-white text-decoration-none'>New Tweet</a></button>
                    </div>
                    <div className='col-2 d-flex'>
                        <button className='btn btn-info'><a href='/home/tweets' className='text-white text-decoration-none'>See all Tweets</a></button>
                    </div>
                </div>
                <br/>
                <div className='row justify-content-center'>
                    <div className='col-2 d-flex justify-content-end'>
                        <button className='btn btn-primary'><a href='/home/hashtag/new' className='text-white text-decoration-none'>New Hashtag</a></button>
                    </div>
                    <div className='col-2 d-flex'>
                        <button className='btn btn-info'><a href='/home/hashtags' className='text-white text-decoration-none'>See all Hashtags</a></button>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;