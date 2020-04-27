var React = require('react');

class Dashboard extends React.Component {
  render() {

    return (
      <html>
        <body>
        <h1>Welcome {this.props.name}</h1>

        <form action="/registration" method="POST">
            <p>
              What's on your mind today? <input name="tweed"/>
            </p>
            <p>
              <input type="submit"/>
            </p>
            </form>

        </body>
      </html>
    );
  }
}

module.exports = Dashboard;