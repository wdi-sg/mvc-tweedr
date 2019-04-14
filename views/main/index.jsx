var React = require("react");

class Home extends React.Component {
  render() {

    let tweeds = this.props.tweeds.map(tweed => {
        return <div> {tweed.content} </div>
    });

    console.log(this.props.types);


    return (
      <html>
        <head />
        <body>
          <h3>TWEEDR</h3>
          <p>{tweeds}</p>
        </body>
      </html>
    );
  }
}

module.exports = Home;