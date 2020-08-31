var React = require("react");

class Index extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <h3>Welcome to Tweedr</h3>

          <form method='GET' action='/login'>
            <input type='submit' value='log in'/>
          </form>

          <form method='GET' action='/register'>
            <input type='submit' value='register'/>
          </form>

        </body>
      </html>
    );
  }
}

module.exports = Index;
