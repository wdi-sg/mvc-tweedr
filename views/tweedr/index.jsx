var React = require("react");

class Home extends React.Component {
  render() {
    const list = this.props.result.map(tweed  => {
      return (
        <div>
           <p>Tweed Id: {tweed.id} </p>
           <p>message: {tweed.message}</p>
           <form action={`/tweedr/${tweed.id}?_method=delete`} method="POST">
            <input type="submit" defaultValue="Delete"/>
          </form>
          <br/><br/><br/><br/>
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
