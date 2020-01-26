var React = require("react");

class Header extends React.Component {
  render() {
    let url;
    var btnValue = `Log In`;
    const userState = () => {
    let loggedIn = false;
      loggedIn ? (btnValue = `Log In`, url = `/profile`) : (loggedIn = true, btnValue = `Log Out`, url = `/signpage`)
    };
    return (
      <html>
      <head>
        <meta charSet="UTF-8"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
      </head>
        <body>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#">Tweedr</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Followers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tweets</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> More </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Settings & Privacy</a>
                  <a className="dropdown-item" href="#">Help</a>
                </div>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
               <form method = "POST"  action = {url} >
                  <span> Username: <input type = "text" name = "username"/> </span>
                  <span> Password: <input type = "text" name = "password"/> </span>
                  <input onClick = {userState} type= "submit" id = "logged" value = {btnValue}/>
                </form>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Header;
