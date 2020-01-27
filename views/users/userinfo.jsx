var React = require("react");
var DefaultLayout = require('../templates/default/defaultlayout');

class UserInfo extends React.Component {
    render() {

      const allFollowers = this.props.followers.map( (follower, index) => {
          console.log('INDIVIDUAL FOLLOWER:')
          console.log(follower);
          return ( <li>{follower.username}</li>)})

      const actionURL = `/users/${this.props.userID}/follow`
      const buttonName = `Follow ${this.props.username}`

        return (
          <DefaultLayout title="Sign In">
            <h1>User: {this.props.username}</h1>
              <form action={actionURL} method="POST">
                  <input type="hidden" name="followedUserID" value={this.props.userID}/>
                  <input type="hidden" name="followerUserID" value={this.props.clientUserID}/>
                  <input type="submit" className="btn btn-primary" value={buttonName}/>
              </form>
            <div className="row">
              <div className="col">
                <h3>
                  Followers:
                </h3>
                <ul>
                  {allFollowers}
                </ul>
              </div>
              <div className = "col">
                <h3>
                  Following:
                </h3>
                <ul>
                </ul>
              </div>
            </div>
          </DefaultLayout>
                )
  }
}

module.exports = UserInfo;
