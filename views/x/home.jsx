var React = require("react");
const Navbar = require('./navbar.jsx');
const Head = require('./head.jsx');

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

class AllUsersFunction extends React.Component {
    render(){
        let username = this.props.key1.username;
        let id = this.props.key1.id;
        return(
            <p><a href={'http://localhost:3000/user/'+id}>{username}</a></p>
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

    let allUsersArr = this.props.allUsers;
    let allUsers = allUsersArr.map(allUsers =>{
        return <AllUsersFunction key1={allUsers}/>
    })

    return (
      <html>
        <Head/>
        <body>
        <Navbar key1={this.props}/>
          <h2>Home page</h2>
          <h3>Welcome, {username}!</h3>
          <form method="POST" action="/home">
            <input type="text" name="tweed" placeholder="What's on your mind?"/><br/>
            <input type="submit" value="Tweed"/>
          </form>

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
          <div>
            <h4>Users in Tweedr</h4>
            <div>
              {allUsers}
            </div>
          </div>
          <script src="/script.js"/>
        </body>
      </html>
    );
  }
}

module.exports = Home;