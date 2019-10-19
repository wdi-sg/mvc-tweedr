var React = require("react");

class LoginSuccess extends React.Component {
  render() {
    // console.log("this.props!!!!!!", this.props);
    return (
      <html>
        <head />
        <body>
          <h3>Yay! You're now logged in!</h3>
          <p>You're logged in with these info:</p>
          <ul>
            {this.props.loggedInUser.map(user => (
              <React.Fragment>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.password}</li>
              </React.Fragment>
            ))}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = LoginSuccess;
