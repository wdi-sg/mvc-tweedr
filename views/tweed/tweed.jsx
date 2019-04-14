var React = require("react");

class Tweed extends React.Component {
  render() {
    console.log("Tweed jsx: ");
    console.log(this.props.object);
    const results = this.props.object;
    const tweets = this.props.object.map(item => {
          return (
            <div class="container" style={{textAlign: 'left', margin: '0 30%', border: 'solid 1px black', padding: '1% 2%'}}>
              <h4 style={{textTransform: 'capitalize', marginBottom: '0px'}}>{item.username}</h4>
          <p style={{position: 'relative', left: '10px'}}>{item.content}</p>
            </div>
          );
        })

    return (
      <html>
        <head />
        <body style={{textAlign: 'center'}}>
          <h3 style={{display: 'inline-block', margin: '0 5px', position: 'relative', top: '1px'}}>Tweed something:</h3>
          <form style={{display: 'inline-block', margin: '0 5px'}} method="POST" action="/tweed" >
            <textarea style={{resize: "none", position: 'relative', top: '7px', margin: '0 5px'}} name="content" rows="1" cols="40" placeholder="Write your tweed here" />
            <input type="submit" value="Submit" />
          </form>
          <h3 style={{margin: '50px 0 10px'}}>Your Tweedr feed: </h3>
          {tweets}
        </body>
      </html>
    );
  }
}

module.exports = Tweed;
