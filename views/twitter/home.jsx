var React = require("react");

class Home extends React.Component {
  render() {
      let  tweets = this.props.rows.map((tweet,index)=>{
               return <p>{index+1} {tweet.tweets}</p>})
    return (
      <html>
        <head />
        <body>
        <form method ="post" action= "/logout">          
          <input type="submit" value="logout"/>
        </form>
        <form method ="post" action= "/home">
          <input type ="text" name = "tweets"/>TWEEEET<br/>
          <input type="submit" value="POST TWEET"/>
        </form>
          <h1>{tweets}</h1>
        </body>
      </html>
    );
  }
}

module.exports = Home;
