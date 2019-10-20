var React = require("react");

class Tweed extends React.Component {
  render() {
    console.log(this.props.tweed);
    let display=this.props.tweed;
    if (display.tweed) { console.log("edit tweed!") } else { console.log("new tweed!") };
    return (
      <html>
        <head />
        <body>
          <h3>{display.title}</h3>
            <form method="POST" action={display.formAction}>
                Tweed: <input type="text" name="tweed" required/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Tweed;