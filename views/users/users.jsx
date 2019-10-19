const React = require("react");

class Users extends React.Component {
  render() {
    let {name, tweets} = this.props;
    console.log(this.props)
    return (
      <html>
        <head />
        <body>
          <h1>TWEEDR</h1>
          <h3>{name} What Ya Thinking?</h3>
          <form action="/users" method="post">
            <div>
              <textarea cols="50" rows="4" type="text" name="message"/>
            </div>
            <input type="Submit" value="Tweet"/>
          </form>
            { tweets !== null ? (tweets.map((tweet, i) => (
              <div>
                <h4>{tweet.name} <span>{tweet.created_at.toString()}</span></h4>
                <p>{tweet.message}</p>
              </div>
            ))): ""}
        </body>
      </html>
    );
  }
}

module.exports = Users;
