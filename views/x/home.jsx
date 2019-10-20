var React = require("react");
const Navbar = require('./navbar.jsx');
const Head = require('./head.jsx');
const Script = require('./script.jsx');

class FollowingTweeds extends React.Component {
    render() {
        let user = this.props.key1.username;
        let content = this.props.key1.content;
        return (
            <p>{user}: {content}</p>
        )

    }
}

class TweedFunction extends React.Component {
    render() {
        let tweed = this.props.key1.content;
        return (
            <p>{tweed}</p>
        )
    }
}

class AllUsersFunction extends React.Component {
    render() {
        let username = this.props.key1.username;
        let id = this.props.key1.id;
        return (
            <p class="d-inline-block users"><a href={'http://localhost:3000/user/'+id}>{username}</a></p>
        )
    }
}

class Home extends React.Component {
    render() {
        let username = this.props.username;

        let tweedArr = this.props.tweed;
        if (tweedArr === null) {
            var tweed = "You have no tweeds!"
        } else {
            var tweed = tweedArr.map(tweed => {
                return <TweedFunction key1={tweed}/>
            })
        }

        let fTweedArr = this.props.following;
        console.log(this.props.following)
        if (fTweedArr === null) {
            var fTweed = "You aren't following anyone!"
        } else {
            var fTweed = fTweedArr.map(fTweed => {
                return <FollowingTweeds key1={fTweed}/>
            })
        }

        let allUsersArr = this.props.allUsers;
        let allUsers = allUsersArr.map(allUsers => {
            return <AllUsersFunction key1={allUsers}/>
        })

        return (
            <html>
            <Head/>
            <body>
              <Navbar key1={this.props}/>
              <div class="container">
                  <h1 class="mt-4">Welcome, {username}!</h1>
                  <div id="tweedPost">
                      <form method="POST" action="/home">
                        <input id="WOYM" type="text" name="tweed" placeholder="What's on your mind?"/><br/>
                        <input id="tweedBtn" type="submit" value="Tweed"/>
                      </form>
                  </div>
                  <div>
                      <h2>Your tweeds</h2>
                      <div>
                        {tweed}
                      </div>
                  </div>
                  <div>
                      <h2>Tweeds you are following</h2>
                      <div>
                        {fTweed}
                      </div>
                  </div>
                  <div>
                    <h2>Users in Tweedr</h2>
                    <div>
                      {allUsers}
                    </div>
                  </div>
              </div>
            </body>
            <Script/>
          </html>
        );
    }
}

module.exports = Home;