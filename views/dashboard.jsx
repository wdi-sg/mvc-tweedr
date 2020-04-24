ar React = require('react');

class Login extends React.Component {
  render() {

    return (
      <html>
        <body>
        <h1>Welcome {this.props.name}</h1>
        </body>
      </html>
    );
  }
}

module.exports = Login;