var React = require("react");
const Navbar = require('./navbar.jsx');
const Head = require('./head.jsx');

class TweedFunction extends React.Component {
    render() {
        let tweedId = this.props.key1.id;
        let tweed = this.props.key1.content;
        return (
            <p><a href={"http://localhost:3000/tweed/"+tweedId}>{tweed}</a></p>
        )
    }
}

class Home extends React.Component {
  render() {
    let username = this.props.username;
    let id = this.props.user_id;
    console.log(this.props)
    let tweedArr = this.props.tweed;
    if (tweedArr === null) {
        var tweed = "You have no tweeds!"
    } else {
        var tweed = tweedArr.map(tweed => {
            return <TweedFunction key1={tweed}/>
        })
    }
    return (
      <html>
        <Head />
        <body>
          <Navbar key1={this.props}/>
          <div class="container">
              <h1>Welcome, {username}!</h1>
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
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;