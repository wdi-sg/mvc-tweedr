var React = require("react");
var Default = require("./layout/default");

class Delete_Tweet extends React.Component {
  render() {
    let url = "/tweedr/delete_tweet?_method=delete"
    return (
      <Default title={this.props.title} cookieLogin={this.props.cookieLogin} cookieUser={this.props.cookieUser} cookieUserId={this.props.cookieUserId} allUsers = {this.props.allUsers}>

            <form className="login-form" method="POST" action={url}>
                <h2>Delete Tweete</h2>
                <table className="table table-bordered">
                    <tr>
                        <th scope="column">Tweet</th>

                    </tr>
                    <tr>
                        <td><input className="form-control" type="text" name="tweet" value={this.props.result[0].content} readOnly style={{backgroundColor:"#eaeaea"}}/></td>
                    </tr>

                </table>
                <p className="delete-confirm-msg">Are you sure you want to delete this tweet?</p>
                <input name="tweet_id"value={this.props.result[0].id} hidden/>
                <input className="btn btn-primary" type="submit" value="Yes"/>

            </form>
            <form action="/tweedr"><input className="btn btn-primary no-button" type="submit" value="No"/></form>

      </Default>
    );
  }
}

module.exports = Delete_Tweet;
