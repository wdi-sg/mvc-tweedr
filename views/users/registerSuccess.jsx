var React = require("react");

class RegisterSuccess extends React.Component {
  render() {
      console.log("this.props!!!!!!",this.props)
    return (
      <html>
        <head />
        <body>
          <h3>Yay! You're now registered!</h3>
          <p>You have registered with these info:</p>
          <ul>
              {this.props.registeredUser.map(user => (
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

module.exports = RegisterSuccess;
