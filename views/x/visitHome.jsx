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
    let tweedArr = this.props.tweed;
    if (tweedArr !== null){
        var tweed = tweedArr.map(tweed =>{
            return <TweedFunction key1={tweed}/>
        })
    } else {
        var tweed = "Nothing to show";
    }
    return (
      <html>
        <head />
        <body>
          <h3>Welcome to {username}'s page!</h3>
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