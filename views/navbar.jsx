var React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand">TWEEDR</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tweets">
                All Tweets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tweets/new">
                New Tweet
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="">
                  Sample 1
                </a>
                <a class="dropdown-item" href="">
                  Sample 2
                </a>
                <a class="dropdown-item" href="">
                  Sample 3
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">
                Logout
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <p class="my-2 my-sm-0">
              Sample
            </p>
          </form>
        </div>
        <script></script>
      </nav>
    );
  }
}

module.exports = Navbar;
