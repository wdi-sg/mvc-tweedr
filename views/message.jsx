var React = require('react');

class Message extends React.Component {
  render() {
   console.log(this.props.types);
    return (
      <html>
        <body>

        <div>
         <h1>Create New Message</h1>
        </div>


          <div>
            <form action="/login" method="POST">
                <p>Message <textarea name="message" required/></p>
                <p>User_Id <input type="user_id" name="user_id"/></p>
                <p><input type="submit"/></p>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Message;