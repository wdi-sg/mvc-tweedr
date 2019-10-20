var React = require("react");
const Navbar = require('./navbar.jsx');
const Head = require('./head.jsx');

class FriendFunction extends React.Component {
    render(){
        let friend = this.props.key1.username;
        let id = this.props.key1.id;
        return(
            <h3><a href={'http://localhost:3000/user/'+id}>{friend}</a></h3>
        )
    }
}

class Home extends React.Component {
  render() {
    let username = this.props.username;
    let id = this.props.visitingId;
    let followingArr = this.props.results;
    let following = followingArr.map(element =>{
        return <FriendFunction key1={element}/>
    })
    console.log(this.props.results);
    // let tweedArr = this.props.tweed;
    // if (tweedArr !== null){
    //     var tweed = tweedArr.map(tweed =>{
    //         return <TweedFunction key1={tweed}/>
    //     })
    // } else {
    //     var tweed = "Nothing to show";
    // }

    return (
      <html>
        <Head />
        <body>
          <Navbar key1={this.props}/>
          <div class="container">
              <h1>Friend list</h1>
              <div>
                {following}
              </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;