var React = require("react");

class Index extends React.Component {
  render() {
    let data = this.props; //Should be an array of objects.
    console.log(data);
    return (
      <html>
        <head />
        <body>
          <h3>Home page</h3>
          <div>{data}</div>
        </body>
      </html>
    );
  }
}

module.exports = Index;