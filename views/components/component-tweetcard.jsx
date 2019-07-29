var React = require("react");

class Tweetcard extends React.Component {
  render() {
    console.log(this.props.types);
    var userLink = "/users/"+this.props.id
    var tweetLink = "/tweet/"+this.props.tweetid
    return (
      <div>
      <div class="tweetcard" style={{backgroundColor:"rgba(100,100,100,0.5)", borderRadius:25+"px",textAlign:"center",width:200+"px",margin:"0 auto"}}>
        <p><a href={userLink} style={{textDecoration:"none", color:"rgba(255,255,255,0.5)"}}>{this.props.name}</a></p>
      </div>
      <a href={tweetLink} style={{textDecoration:"none", color:"rgba(100,100,100,0.5)"}}>
        <div class="tweetcard" style={{backgroundColor:"rgba(255,255,255,0.5)", borderRadius:0+"px",textAlign:"center",width:200+"px",margin:"0 auto"}}>
          <p>{this.props.tweet}</p>
        </div>
      </a>
      </div>
    );
  }
}

module.exports = Tweetcard;
