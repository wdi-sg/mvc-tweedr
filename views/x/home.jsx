var React = require("react");

class FollowingTweeds extends React.Component {
    render(){
        let user = this.props.key1.username;
        let content = this.props.key1.content;
        return(
            <p>{user}: {content}</p>
        )

    }
}

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

    let tweed = tweedArr.map(tweed =>{
        return <TweedFunction key1={tweed}/>
    })
    let fTweedArr = this.props.following;
    let fTweed = fTweedArr.map(fTweed =>{
        return <FollowingTweeds key1={fTweed}/>
    })
    return (
      <html>
        <head />
        <body>
          <h2>Home page</h2>
          <h3>Welcome, {username}!</h3>
          <div>
              <h4>Your tweeds</h4>
              <div>
                {tweed}
              </div>
          </div>
          <div>
              <h4>Tweeds you are following</h4>
              <div>
                {fTweed}
              </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;