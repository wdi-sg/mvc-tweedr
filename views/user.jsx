var React = require("react");
var Header = require('./header');

class User extends React.Component {
  render() {

    let tweets = this.props.ccb.map(tweet => {
                              return <div>
                              <p>{tweet.tweets}</p>
                              </div>
                            });

    let username = this.props.ccb[0].username;
    let id = this.props.ccb[0].user_id;

    return (
      <html>
        <Header/>
        <body>
          <div class="userpage">
              <h1 class="text-center">{username}'s Profile And Tweeds</h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <h3> Tweed Your Latest Thoughts</h3>

              <form method="post" action="/newtweed">
                  <div class="form-group">
                      <input type="text" class="form-control" name="id" value={id} readonly="readonly"/>
                      <textarea class="form-control" rows="5" name ="tweet" id="newtweed"></textarea>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
              </form>

              <hr/>
              <h3> Tweeds Vine </h3>
              {tweets}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = User;


          // <p> {this.props.ccb[0].tweets}</p>
          // {tweets}