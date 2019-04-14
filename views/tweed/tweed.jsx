var React = require("react");

class Tweed extends React.Component {
  render() {
    console.log("Tweed jsx: ");

    return (
      <html>
        <head />
        <body>
          <h1>Tweed something:</h1>
          <form method="POST" action="/tweed" >
            <textarea style={{resize: "none"}} name="content" rows="1" cols="40" placeholder="Write your tweed here" />
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Tweed;
