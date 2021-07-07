var React = require("react");

class Navbar extends React.Component {
  render() {

    return (
        <header>


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/">Tweedr</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/allUsers">All Users</a>
                  </li>
                  <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Connections
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/followers">Following</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="/followYou">Followers</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Payments
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/paymentPage">Pay Users</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="/senderTotal">Payment Received</a>
                    </div>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0 mr-4" method='POST' action='/users'>
                  <input class="form-control mr-sm-2" type="text" name="username" placeholder="username" required/>
                  <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search Users</button>
                </form>
                <div class="navbar-nav">
                  <a class="btn btn-outline-dark" href="/logout">Log Out</a>
                </div>
              </div>
            </nav>


        </header>
    );
  }
}

module.exports = Navbar;