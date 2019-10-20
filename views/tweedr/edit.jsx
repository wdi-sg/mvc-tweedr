let React = require('react');

class Edit extends React.Component {
  render() {
    console.log("this is edit" + this.props.result[0])
    return(
      <html>
        <body>
          <h1>Edit tweed: {this.props.id}</h1>
          <form action={`/tweedr/${this.props.id}?_method=put`} method="POST">
            <p>Message</p>
            <input type="text" name="message" defaultValue={this.props.result[0].message}/><br/><br/>
            <input type="submit" value="Edit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Edit;