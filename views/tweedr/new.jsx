const React = require('react');

class New extends React.Component {
  render(){
    return(
      <html>
        <body>
          <h1>New Tweet?</h1>
          <form action={'/tweedr'} method="POST">
            <p>Message</p>
            <input type="text" name="message"/><br/><br/>
            <input type="hidden" name="user_id" defaultValue={this.props.id}/>
            <input type="submit" value="Tweed"/><br/><br/><br/><br/>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = New;
