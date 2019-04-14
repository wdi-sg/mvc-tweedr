var React = require("react");

class Profile extends React.Component {
  render() {


    let name = this.props.user.name;


    return (
      <html>
        <head />
        <body>
          <h3>TWEEDR PROFILE</h3>
          <p>Name: {name}</p>
        </body>
      </html>
    );
  }
}

module.exports = Profile;