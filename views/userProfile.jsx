var React = require("react");

class UserProf extends React.Component {
  render() {
    let tweetHTML = this.props.userInfo.map((item)=>{
        return <div>{item.tweet}, {item.username}</div>
    })
    return (
      <html>
        <head />
        <body>
          <h3>Feed</h3>
          {tweetHTML}
        </body>
      </html>
    );
  }
}

module.exports = UserProf;