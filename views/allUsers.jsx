var React = require("react");

class AllUsers extends React.Component {
  render() {
    let allUsersHTML = this.props.allUsers.map((item)=>{
        let profilePage = "/" + item.username
        return <li><a href={profilePage}>{item.username}</a></li>
    })

    return (
      <html>
        <head />
        <body>
            <h1>All Users</h1>
            <ul>
            {allUsersHTML}
            </ul>

        </body>
      </html>
    );
  }
}

module.exports = AllUsers;