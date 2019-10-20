const React = require('react');

class Followed extends React.Component {
  render(){
    const list = this.props.result.map(user  => {
     return (
       <div>
        <p>Id: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
     )
    });
    return(
      <html>
        <body>
          <h1>Followed User</h1>
          {list}
        </body>
      </html>
    )
  }
}

module.exports = Followed;