const React = require('react');

class Show extends React.Component {
  render(){
    const list = this.props.result.map(user  => {
     return (
       <div>
        <p>Id: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
       </div>
     );
    })
    return(
      <html>
        <body>
          <h1>User profile</h1>
          {list}<br/><br/>
        </body>
      </html>
    )
  }
}

module.exports = Show