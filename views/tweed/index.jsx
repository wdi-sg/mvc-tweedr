var React = require("react");

class Home extends React.Component {
  render() {
    const display = this.props;
    const tweeds = display.result.map(tweed => {
      return (
        // to link to tweed
        <li>{tweed.tweed}
            &nbsp;by&nbsp;
            {tweed.name}</li>
        // to link to user
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