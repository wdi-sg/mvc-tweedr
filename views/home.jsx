

var React = require('react');

class Home extends React.Component {
  render() {

    const tweets = this.props.allTweets.map(item => {
      return(<div class="card">
                <div class="card-body">
                  <div class="media">
                    <img src="..." class="align-self-start mr-3" alt="..." />
                    <div class="media-body">
                       <h5 class="mt-0">Top-aligned media</h5>
                      <p>{item.tweets}</p>
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
                <a className="nav-link" href={'/home'}>Tweets</a>
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
                <div class="form-group">
                  <textarea class="form-control" name="tweets" id="userTweet" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Tweet</button>
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
        </body>
      </html>
    );
  }
}

module.exports = Home;