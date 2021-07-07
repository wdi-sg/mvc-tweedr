

var React = require('react');

class Home extends React.Component {
  render() {

    const tweets = this.props.allTweets.map(item => {
      return(<div className="card">
                <div className="card-body">
                  <div className="media">
                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" style={{height : '75px', width: '75px', objectFit : 'cover', backgroundPosition: 'center center'}} className="align-self-start mr-3 rounded-circle"/>
                    <div className="media-body">
                      <p>{item.tweets}</p>
                      <p className="card-text"><small className="text-muted">3 mins ago</small></p>
                    </div>

                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu">
                        <form action="/edit" method="POST">
                          <button type="submit" className="btn dropdown-item" name="tweetId" value={item.id}>Edit</button>
                        </form>
                        <form action="/delete" method="POST">
                          <button type="submit" className="btn dropdown-item" name="tweetId" value={item.id}>Delete</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
      )
    })

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Leckerli+One|Lora&display=swap" rel="stylesheet"></link>

        </head>
        <body style={{backgroundColor : '#E7ECF0'}}>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" style={{fontFamily: "Leckerli One, cursive", color : "#209CEE"}}>Tweedr</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href={'/home'}>Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={'/pictures'}>Upload Pictures</a>
              </li>
            </ul>
          </div>

            <form action="/logout" method="POST">
              <button type="submit" className="btn btn-primary">Log Out</button>
            </form>
        </nav>

        <img src="https://images.unsplash.com/photo-1541267226650-673e4bc869c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80" alt="" style={{maxHeight : '350px', width: '100%', objectFit : 'cover', backgroundPosition: 'initial'}}/>

        <div className="container mx-auto">
          <div className="row">
            <div className="col">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" style={{height : '200px', width: '200px', objectFit : 'cover', backgroundPosition: 'center center'}} className="rounded-circle border border-white mt-3"/>
            </div>

            <div className="col-6 mt-3">
              <form action="/tweet" method="POST">
                <h2 className="text-muted font-weight-light">What's happening?</h2>
                <div className="form-group">
                  <textarea className="form-control" name="tweets" id="userTweet" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ position: 'relative',
    right: '-100%', transform: 'translate(-100%,0)'}}>Tweet</button>
              </form>

              <div className="card-header text-center font-weight-bold mt-2">
                    Tweets
              </div>
              {tweets}
            </div>

            <div className="col">

            </div>
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;