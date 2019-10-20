var React = require("react");

class Home extends React.Component {
  render() {
    const list = this.props.result.map(tweed  => {
      return (
        <div>
          <p>Tweed Id: {tweed.id} </p>
          <p>message: {tweed.message}</p><br/><br/>
          <form action={`/tweedr/${tweed.id}?_method=delete`} method="POST">
            <input type="submit" defaultValue="Delete"/>
          </form>
        </div>
        
      );
     })
    return (
      <html>
        <head />
        <body>
          <h3>Single Tweed</h3><br/>
          {list}
        </body>
      </html>
    );
  }
}

module.exports = Home;
