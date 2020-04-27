var React = require("react");

class Home extends React.Component {
  render() {
    // console.log(this.props.allTweeds);
    // console.log(this.props.allTweeds.length);
    let tweeds = this.props.allTweeds;
    var output = tweeds.map(tweed => {
      return <div>
        <p>{tweed.content} by {tweed.user_id}</p>
      </div>
    });

    return (
      <html>
        <head />
        <body>
          <nav>
            <a href="/login">Login</a>||
            <a href="/register">Register</a>
          </nav>

          <div>
            {output}
          </div>

        </body>
      </html>
    );
  }
}

module.exports = Home;
