var React = require("react");

class TweedFunction extends React.Component {
    render(){
        let tweed = this.props.key1.content;
        return(
            <p>{tweed}</p>
        )
    }
}

class Home extends React.Component {
  render() {
    let username = this.props.username;
    let id = this.props.visitingId;

    let tweedArr = this.props.tweed;
    if (tweedArr !== null){
        var tweed = tweedArr.map(tweed =>{
            return <TweedFunction key1={tweed}/>
        })
    } else {
        var tweed = "Nothing to show";
    }

    let following = this.props.following;
    if (following === true){
        var path2 = "Unfollow";
        var path3 = "/un"
    } else {
        var path2 = "Follow"
        var path3 = "/en"
    }

    return (
      <html>
        <head />
        <body>
          <h3>Welcome to {username}'s page!</h3>
          <form method="POST" action={"/follow/"+id+path3}>
            <input type="submit" value={path2}/>
          </form>
          <div>
              <h4>{username}'s tweeds</h4>
              <div>
                {tweed}
              </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;