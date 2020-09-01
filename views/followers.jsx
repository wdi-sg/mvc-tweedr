var React = require("react");

class Followers extends React.Component {
  render() {
    let followersHTML = this.props.followersList.map((item)=>{
        return <li><a href={"/"+item.follower_username}>{item.follower_username}</a></li>
    })
    return (
      <html>
        <head />
        <body>
          <h3>{this.props.followersList[0].username}'s Followers</h3>
          <ul>
          {followersHTML}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Followers;