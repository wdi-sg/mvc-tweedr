var React = require("react");

class Navbar extends React.Component {
  render() {

    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Tweedr</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="/">Home</a>
                    </div>
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="/allUsers">All Users</a>
                    </div>
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="/profilePic">Profile Picture</a>
                    </div>
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="/followers">Following</a>
                    </div>
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="/followYou">Followers</a>
                    </div>
                    <div class="navbar-nav">
                      <a class="nav-item nav-link active" href="/logout">Log Out</a>
                    </div>
                    <form class="form-inline my-2 my-lg-0" method='POST' action='/users'>
                      <input class="form-control mr-sm-2" type="text" name="username" placeholder="username" required/>
                      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search Users</button>
                    </form>
                </div>
            </nav>
        </header>
    );
  }
}

module.exports = Navbar;