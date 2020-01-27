var React = require("react");
var DefaultLayout = require('../templates/default/defaultlayout');

class NewMessage extends React.Component {
    render() {

      let postNewMessage = `Sign in to post whatever you like.`

      if (this.props.signedin.userID) {
         postNewMessage = <div className="card mb-3"><div className="card-body"><form action="/messages" method="POST"><input type="hidden" name="userID" value={this.props.signedin.userID}/><p><input type="text" className="form-control" id="MessageContent" name="message" placeholder="What ya Thinking?" required/></p><input type="submit" className="btn btn-primary"/></form></div></div>
      }

      const allMessages = this.props.messages.map( (message, index) => {
        const userLink = `/users/${message.user_id}`
        const messageLink = `/messages/${message.id}`
        return( <div className="card mb-2">
                  <div className="card-body">
                    <p className="card-text">
                      <a href={messageLink} className="text-body">{message.message}</a>
                    </p>
                    <p className="card-text text-muted">
                      Posted by <a href={userLink}>{message.username}</a> {message.date_formatted}.
                    </p>
                  </div>
                </div> )
      })

        return (
          <DefaultLayout title="Sign In">
            <p>
              {postNewMessage}
            </p>
            <div>
              {allMessages}
            </div>
          </DefaultLayout>
                )
  }
}

module.exports = NewMessage;
