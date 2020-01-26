var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
          <form action="/" method='POST'>
              <input type="text" name="name" placeholder="name"/>
              <input type="text" name="password" placeholder="password"/>
              <input type="submit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;
