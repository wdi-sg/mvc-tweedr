var React = require("react");

class Home extends React.Component {
  render() {
    const display = this.props;
    const tweets = display.result.map(tweet => {
      return (
        // to  tweet
        <li>
          {tweet.tweet}
          &nbsp;by&nbsp;
          {tweet.name}
        </li>
      );
    });
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-Equiv="X-UA-Compatible" content="ie=edge" />
          <title>Tweet!</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>
          <h1>TWEEDR</h1>
          <h2>{display.user}</h2>
          <form method="GET" action={display.formActionReg}>
            <input type="submit" value={display.buttonReg} />
          </form>
          <form method="GET" action={display.formActionIn}>
            <input type="submit" value={display.buttonIn} />
          </form>
          <ul>{tweets}</ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;
