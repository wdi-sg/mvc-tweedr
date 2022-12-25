var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class Write extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <body>
            <Navbar />
            <h1>Compose New Tweed</h1>
            <form action="/tweeds" method="POST">
                <div className="form-group">
                    <label>Message :</label>
                    <input type="text" className="form-control" placeholder="Write Message" name="message"/>
                </div>
                <div className="form-group">
                    <input type="hidden" name="owner_id" value={this.props.userId}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Write;