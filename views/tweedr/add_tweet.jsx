var React = require("react");
var Default = require("./layout/default");

class Add_Tweet extends React.Component {
  render() {
    let url = "/tweedr/add_tweet_post"
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>

            <form className="login-form" method="POST" action={url}>
                <h2>Add Tweet</h2>
                <table className="table table-bordered">
                    <tr>
                        <th scope="column">Tweet</th>

                    </tr>
                    <tr>
                        <td><input className="form-control" type="text" name="tweet"/></td>
                    </tr>

                </table>
                <input name="user_id"value={this.props.cookieUserId} hidden/>
                <input className="btn btn-primary" type="submit" value="submit"/>
            </form>
      </Default>
    );
  }
}

module.exports = Add_Tweet;
