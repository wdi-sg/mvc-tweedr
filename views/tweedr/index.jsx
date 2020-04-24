var React = require("react");
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');

class Home extends React.Component {
  render() {
    var showLogin = 'd-inline';
    var showLogout = 'd-none';
    // console.log(this.props.types);
    var loginCheck = this.props.loggedin;
    
      // Function to format date time value
      function formatDateTime(date) {
        var formatDate = date.toLocaleDateString();
        var formatTime = date.toLocaleTimeString();
        return `${formatDate} ${formatTime}`;
      }

    if (loginCheck == sha256('true')){
      showLogin = 'd-none'
      showLogout = 'd-inline';
    }
    else{
      showLogin = 'd-inline'
      showLogout = 'd-none';
    }
    var tweets = this.props.tweets;
    if (tweets == null) {
      tweets = <div className="row bg-light  border-top border-bottom border-secondary pt-4 pb-4">No tweets to display</div>
    }
    else {
      tweets = tweets.map(element => {
        var date = formatDateTime(element.postdate);
        return <div className="row bg-light  border-top border-bottom border-secondary pt-4 pb-4">
          <div className="col-1">
            <img src="https://sociology.columbia.edu/themes/custom/columbia/assets/img/people-default.svg" className="w-100 bg-dark rounded-circle" alt="" />
          </div>
          <div>
            <strong>@{element.username}</strong>
            <br />{element.tweetbody}
            <br/>
            <br /><small>{date}</small>
          </div>
        </div>

      });
    }
    
    return (
      <html>
        <head>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

        </head>
        <body className="bg-dark">
          <div className = "bg-dark border-bottom border-secondary">
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
          <div className = "container bg-dark w-75 border border-secondary pt-3 pb-3 mt-3 mb-3 rounded-lg">
            <h3 className = "text-light font-weight-light font-italic">Tweedr Feed</h3>
            {tweets}
          </div>
          
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
