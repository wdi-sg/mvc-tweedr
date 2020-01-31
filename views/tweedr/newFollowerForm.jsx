var React = require('react');

class addUser extends React.Component {
    render() {
        //to map through objects
        let usersArray = this.props;
        const list = usersArray.map(user => {
        return <option value={user.id}>{user.name}</option>
    });
    return (
      <html>
        <body>
        <h1>Add follower from here!</h1>
          <div>
          <form method="POST" action="/addfollower">
            <select name="user_id">
            {list}
            </select>
            <p>
                <input type="submit" value="submit"/>
            </p>
            </form>
            <a href="/logout">Log out</a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = addUser;