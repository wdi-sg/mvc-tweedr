var React = require("react");
const sha256 = require('js-sha256');

class Main extends React.Component {
  render() {
    var showLogin = 'd-inline';
    var showLogout = 'd-none';
    // console.log(this.props);
    var loginCheck = this.props.loggedIn;

    // Function to format date time value
    function formatDateTime(date) {
      var formatDate = date.toLocaleDateString();
      var formatTime = date.toLocaleTimeString();
      return `${formatDate} ${formatTime}`;
    }

    if (loginCheck == sha256('true')) {
      showLogin = 'd-none'
      showLogout = 'd-inline';
    }
    else {
      showLogin = 'd-inline'
      showLogout = 'd-none';
    }
    var tweets = this.props.tweets;
    if (tweets == null) {
      tweets = <div className="row bg-light  border-top border-bottom border-secondary pt-4 pb-4 pl-3">No tweets to display</div>
    }
    else {
      tweets = tweets.map(element => {
        var date = formatDateTime(element.postdate);
        var tags = element.tags;
        if (tags != undefined) {
            tags = tags.map(element => {
              // console.log(element);
              return <span className="text-primary">{`${element} `}</span>;
            })
        }

        return <div className="row bg-light  border-top border-bottom border-secondary pt-4 pb-4">
          <div className="col-2">
            <img src="https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg" className="w-100 bg-dark rounded-circle" alt="" />
          </div>
          <div className="col-8">
            <strong>@{element.username}</strong>
            <br />{element.tweetbody}
            <br />
            <br />{tags}
            <br /><small>{date}</small>
            <br />
          </div>
          <div className="col-2 btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-outline-warning">
              ★
        <input type="checkbox" name="hashtag" value={element.tweetid}></input>
            </label>
          </div>
        </div>
      });
    }

    var tags = this.props.tags;
    if (tags == null) {
      tags = <label className="btn btn-outline-light mr-2 mb-2">No tags to display</label>
    }
    else {
      tags = tags.map(element => {
        return <label className="btn btn-outline-light mr-2 mb-2">
          {element.tagtext}
          <input type="checkbox" name="hashtag" value={element.tagtext}></input>
        </label>

      });
    }
    return (
      <html>
        <head>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

        </head>
        <body className="bg-dark h-100">
          <div className="bg-dark border-bottom border-secondary">
            <nav className="navbar navbar-dark bg-dark w-75 ml-auto mr-auto pl-0 pr-0">
              <a className="navbar-brand" href="/">
                <img src="/Tweedr White.png" width="30" height="30" className="d-inline-block align-top" alt="">
                </img>
                &emsp;Tweedr
            </a>
              <div className={showLogin}>
                <a className="btn btn-outline-primary rounded-pill mr-3 pl-4 pr-4 pt-1 pb-1" href="/login">Log In</a>
                <a className="btn btn-primary rounded-pill pl-4 pr-4 pt-1 pb-1" href="/signup">Sign Up</a>
              </div>
              <div className={showLogout}>
                <a className="btn btn-outline-primary rounded-pill  pl-4 pr-4 pt-1 pb-1" href="/logout">Log Out</a>
              </div>

            </nav>
          </div>
          <div className="container-fluid bg-dark w-50 h-100 border border-secondary mt-3 mb-5 rounded-lg">
            <form method="POST" action="/post">
              <div className="form-group text-left">
                <label htmlFor="tweet" className="text-light pt-3">Hey {this.props.username}, what's on your mind? :</label>
                <textarea className="form-control" rows="4" name="message" placeholder="Start typing...">
                </textarea>
                <div className="btn-group-toggle mt-2" data-toggle="buttons">
                  {tags}
                  <a className="btn btn-outline-light mr-2 mb-2" href="/tag/new"><strong>+ New Tag</strong></a>
                </div>
                <br />
                <input className="btn btn-primary mt-3" type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div className="container bg-dark w-50 h-100 border border-top border-bottom border-secondary mt-3 rounded-lg">
            {tweets}
          </div>

          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
          <script src="script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Main;
