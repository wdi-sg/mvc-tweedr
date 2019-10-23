var React = require("react");

class Name extends React.Component {
  render() {
    let data = this.props; //Should be an array of objects.
    console.log(data);
    return (
      <html>
        <head />
        <body>
          <h3>Name</h3>
          <div>{data}</div>
        </body>
      </html>
    );
  }
}

module.exports = Name;