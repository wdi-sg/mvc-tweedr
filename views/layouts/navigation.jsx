var React = require('react');

class NavLayout extends React.Component {
  render() {
    let displayLogout = "";
    if(this.props.loggedIn === "true"){
        displayLogout =  (<div className="d-flex flex-row-reverse align-items-end"><a className="nav-link mt-4" href="/signout">Sign out</a><a className="nav-link mt-4" href="#">Followers</a><a className="nav-link mt-4" href="#">Following</a></div>);
    }else{
          displayLogout =  (<div className="d-flex flex-row-reverse align-items-end"><a className="nav-link mt-4" href="/login">Sign In</a><a className="nav-link mt-4" href="/register">Register</a></div>);
    }

    return (
        <div>
      <nav className="navbar navbar-expand-lg d-flex navbar-transparent">
      <h2><a href="/" style={{textDecoration:"none"}}>tweedr</a></h2>
  <div className="collapse navbar-collapse">
    {displayLogout}
      </div>
        </nav>
        </div>
    );
  }
}

module.exports = NavLayout;