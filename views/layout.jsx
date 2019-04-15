var React = require("react");

class Layout extends React.Component {
  render() {
    console.log("home jsx: ");
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
      <head>
        <title>Tweedr</title>
      </head>
      <body style={{textAlign: 'center'}}>
        <header>
          <div class="button-container" style={{display: 'inline-block', position: 'absolute', right: '5%'}}>
            <form style={{display: 'inline-block', margin: '0 5px'}} action="/login">
               <input type="submit" value="Log in" />
            </form>
            <form style={{display: 'inline-block', margin: '0 5px'}} action="/register">
                <input type="submit" value="Sign Up" />
            </form>
          </div>
          <h1>Tweedr</h1>
          <h4 style={{position: 'relative', bottom: '15px'}}>What Ya Thinking?</h4>
        </header>
        {tweets}
      </body>
      </html>
    );
  }
}

module.exports = Layout;
