var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Tweedr</h3>
            <form action="/tweedr/register" method="GET">
            <input type="submit" value="Register"/>
          </form>
         <form action="/tweedr/login" method="GET">
            <input type="submit" value="login"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;