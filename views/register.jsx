var React = require("react");
const Header = require("./header")

class Register extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <Header>
        <div className="container loging">
        <div className="text-center mt-2">{this.props.name} please log in!</div>

        <form action="/register" method='POST' className="w-50">
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" name="name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" aria-describedby="emailHelp" name="password"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
      </Header>
    );
  }
}

module.exports = Register;
