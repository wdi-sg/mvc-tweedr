var React = require("react");

export default class Home extends React.Component {
  render() {

        let {tweets} =this.props;
        console.log(tweets)
      let  tweetslist = tweets.map((item,index)=>{
               return <p>{index+1} {item.tweets} - {item.username}</p>})
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
          <h1>{tweetslist}</h1>
        </body>
      </html>
    );
  }
}
