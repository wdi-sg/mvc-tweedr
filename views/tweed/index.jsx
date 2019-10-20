var React = require("react");

class Home extends React.Component {
  render() {
    const display = this.props;
    const tweeds = display.result.map(tweed => {
      return (
        <li>{tweed.tweed}</li>
      );
    });
    return (
      <html>
        <head />
        <body>
          <h1>TWEEDR</h1>
          <h2>{display.user}</h2>
          <form method="GET" action={display.formAction1}>
            <input type="submit" value={display.button1}/>
          </form>
          <form method="GET" action={display.formAction2}>
            <input type="submit" value={display.button2}/>
          </form>
          <ul>
            {tweeds}
          </ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;