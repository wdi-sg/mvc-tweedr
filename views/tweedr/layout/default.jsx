var React = require('react');

class Default extends React.Component {
  render() {
    let cookieLogin = this.props.cookieLogin? "Log Out":"Login"
    let url = this.props.cookieLogin? "/tweedr/logout":"/tweedr/login";
    let userUrl = "/tweedr/"+this.props.cookieUserId;
    let userName = this.props.cookieLogin? <div><h4>Welcome {this.props.cookieUser}</h4></div>:"";
    let addTweet = this.props.cookieLogin? <li class="nav-item active"><a class="nav-link" href="/tweedr/add_tweet">Add Tweet <span class="sr-only">(current)</span></a></li> : <li></li>;
    let dropDown = this.props.cookieLogin? <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Account
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href={userUrl}>Profile</a>
                  <a class="dropdown-item" href="/tweedr/follower">Followers</a>
                  <a class="dropdown-item" href="/tweedr/following">Following</a>
                </div>
              </li> : <li></li>

    return (
      <html>
          <head>
              <title>{this.props.title}</title>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

              <link rel="stylesheet" type="text/css" href="/css/style.css"></link>
          </head>
        <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/tweedr">Tweedr</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

              <li class="nav-item active">
                <a class="nav-link" href={url}>{cookieLogin}<span class="sr-only">(current)</span></a>
              </li>
              {addTweet}
              {dropDown}

            </ul>

          </div>
          {userName}


        </nav>

                {this.props.children}
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Default;