
var React = require("react");
var Default = require("./layout/default");

class Change_Profile_Pic extends React.Component {

  render() {
    let url = "/tweedr/"+this.props.cookieUserId+"/change_profile_pic_post"
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>
      <div className="single-user-profile">
        <div className="single-profile-pic">
            <img  src={this.props.result.profile_pic}/>
        </div>
        <form enctype="multipart/form-data" action={url} method="POST">
          <input type="file" name="myFile"/>
          <input type="text" name="user_id" value={this.props.cookieUserId} hidden/>
          <input type="submit" value="Change Profile Pic"/>
        </form>


        </div>
      </Default>
    );
  }
}

module.exports = Change_Profile_Pic;



