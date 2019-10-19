const React = require('react');

class New extends React.Component {
  render(){

    return(
      <html>
        <body>
          <h1>Register</h1>
          <form action="/register" method="POST">
            <p>Username</p>
            <input type="text" name="username"/><br/><br/>
            <p>Password</p>
            <input type="text" name="password"/><br/><br/>
            <p>Name</p>
            <input type="text" name="name"/><br/><br/>
            <p>Email</p>
            <input type="text" name="email"/><br/><br/>
            <input type="submit" value="create account"/>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = New;