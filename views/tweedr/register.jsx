var React = require("react");
var Head = require("../head")
var Navbar = require("../navbar")

class Register extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <body>
            <Navbar />
            <h1>Register New User</h1>
            <form action="/users" method="POST">
                <div className="form-group">
                    <label>Username :</label>
                    <input type="text" className="form-control" placeholder="Username" name="username"/>
                    <label className="text-danger">{this.props.response}</label>
                </div>
                <div className="form-group">
                    <label>Password :</label>
                    <input type="text" className="form-control" placeholder="Password" name="password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;