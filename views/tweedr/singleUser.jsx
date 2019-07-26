var React = require("react");
var Default = require("./layout/default");

class Singleuser extends React.Component {

  render() {
    let url = "/tweedr/"+this.props.profile_id+"/follow"
    let followed = this.props.followed? "":<form method="POST"action={url}><input name="user_id" value={this.props.cookieUserId} hidden/><input type="submit" value="Follow"/></form>
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId}>
      <div className="single-user-profile">
        <h2>{this.props.result.name}</h2>
        <table className="table table-bordered">
            <tr>
                <th scope="row">Followers</th>
                <td>{this.props.followerCount}</td>
            </tr>
            <tr>
                <th scope="row">Following</th>
                <td>{this.props.followingCount}</td>
            </tr>
        </table>
        {followed}
        </div>



      </Default>
    );
  }
}

module.exports = Singleuser;
