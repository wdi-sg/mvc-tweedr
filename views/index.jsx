const React = require("react");

class Index extends React.Component {
  render() {

    return (

      <html>
        <head />
        <body>
          <h2>Tweedr Homepage</h2>
          <p>
            Make a Tweed:
            <form action="/create" method="POST">
              <input type="text" name="content" id=""/>
              <input type="submit" value="Tweed!"/>
            </form>
          </p>
          <h3>New Tweed:</h3>
          <p>
            {this.props.content}
          </p>
          <p>
          <h3>Past Tweeds:</h3>
            <form action="/getall" method="POST">
              <input type="submit" value="Get past tweeds"/>
            </form>
          </p>
        </body>
      </html>
    );
  }
}

module.exports = Index;
