const React = require('react');

class New extends React.Component {
  render(){

    return(
      <html>
        <body>
          <h1>Please complete you registration</h1>
          <form action="/register" method="POST">
            <p>Username</p>
            <input type="text" name="username"/><br/>
            <p>Password</p>
            <input type="text" name="name"/><br/>
            <p>Email</p>
            <input type="text" name="email"/><br/>
            <input type="submit" value="create Account"/>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = New;
