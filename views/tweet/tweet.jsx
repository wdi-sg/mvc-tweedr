var React = require("react");

class Tweet extends React.Component {
  render() {

    return (
      <html>
        <head/>
        <body>
          <h3>Let's tweet tweet!!</h3>

          <form action="/new" method="POST">
              <p>Your Tweet</p>
              <input name="tweet"/>

              <p>Your User ID</p>
              <input name="user_id"/>

              <br></br>
              <input type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Tweet;