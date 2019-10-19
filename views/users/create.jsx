const React = require('react');

class Create extends React.Component {
  render(){
    return(
      <html>
        <body>
          <h1>Account created</h1>
          <p>Username: {this.props.result.username} </p>
          <p>Password: {this.props.result.password}</p>
          <p>Name: {this.props.result.name}</p>
          <p>Email: {this.props.result.email}</p>
        </body>
      </html>
    )
  }
}

module.exports = Create;