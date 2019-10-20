var React = require("react");

class Navbar extends React.Component {
    render() {
        let user_id = this.props.key1.user_id;
        let Tweedr = "http://localhost:3000/"
        return (
            <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand" href={Tweedr}>Tweedr!</a>

              <ul class="navbar-nav mr-auto flex-row">
                <li class="mx-3"><a href={Tweedr + "user/" + user_id}>Profile</a></li>
                <li class="mx-3">Friends</li>
              </ul>

              <form method="GET" action="/logout">
                <input type="submit" value="logout"/>
              </form>
            </nav>
        )

    }
}

module.exports = Navbar;