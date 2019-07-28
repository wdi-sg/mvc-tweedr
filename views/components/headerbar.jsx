var React = require('react');

class HeaderBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
              <a className="navbar-brand" href="#"><img src="/images/logo_200x200.png" width="100px" height="100px" alt=""/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="/">Home</a>
                  <a className="nav-item nav-link" href="/newtweet">Profile</a>
                  <a className="nav-item nav-link" href="/logout">Log Out</a>
                </div>
              </div>
            </nav>
        );
    }
}

module.exports = HeaderBar;
