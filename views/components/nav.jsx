import React from "react";

class Nav extends React.Component {
      render() {
            return (
              <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top ">
                <a className="navbar-brand" href="/">
                  tweedr ☾
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/register">
                        Register
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/users">
                        All Users
                      </a>
                    </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/hashtags" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Hashtags
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/hashtags">All Hashtags</a>
                      <a class="dropdown-item" href="/hashtags/new">New Hashtag</a>
                    </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            );
      }
}

export default Nav;