var React = require("react");
var Default = require("./layout/default");

class Edit_Tweet extends React.Component {
  render() {
    let url = "/tweedr/edit_tweet"
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>

            <form className="login-form" method="POST" action={url}>
                <h2>Edit Tweet</h2>
                <table className="table table-bordered">
                    <tr>
                        <th scope="column">Tweet</th>

                    </tr>
                    <tr>
                        <td><input className="form-control" type="text" name="tweet" value={this.props.result[0].content}/></td>
                    </tr>

                </table>
                <input name="tweet_id"value={this.props.result[0].id} hidden/>
                <input className="btn btn-primary" type="submit" value="Update"/>
            </form>
      </Default>
    );
  }
}

module.exports = Edit_Tweet;
