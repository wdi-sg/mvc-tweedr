var React = require("react");
var DefaultLayout = require('../templates/default/defaultlayout');

class IndividualMessage extends React.Component {
    render() {
      console.log(this.props.message);
      const deleteURL= `/messages/${this.props.message.id}?_method=DELETE`
      const title = `Another thrilling message by ${this.props.message.username}.`
      const userLink = `/users/${this.props.message.user_id}`

        return (
          <DefaultLayout title={title}>
            <h4><a href={userLink} className="text-body">{this.props.message.username}</a> wrote:</h4>
            <p>{this.props.message.message}</p>
            <p className="text-muted"><small>{this.props.message.date_formatted}</small></p>
            <form action={deleteURL} method="POST">
                <input type="hidden" name="userID" value={this.props.message.user_id}/>
                <input type="hidden" name="messageID" value={this.props.message.id}/>
                <input type="submit" className="btn btn-danger" value="Delete this message"/>
            </form>
          </DefaultLayout>
                )
  }
}

module.exports = IndividualMessage;
