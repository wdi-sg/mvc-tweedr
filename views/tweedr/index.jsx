var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.result);
    const list = this.props.result.map(tweed  => {
      return (
        <div>
           <p>Tweed Id: {tweed.id} </p>
           <p>message: {tweed.message}</p><br/><br/><br/><br/>
        </div>
      );
     })
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3><br/><br/>
          {list}
        </body>
      </html>
    );
  }
}

module.exports = Home;
