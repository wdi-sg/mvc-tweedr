const React = require("react");
const Layout = require("./layout");

class Register extends React.Component {
  render() {
    const header = this.props.header;
    const actionPath = this.props.actionPath;
    console.log(this.props)
    return (
      <Layout>
        <div className="container">
          <h1>{header}</h1>
          <form action={actionPath} method="post">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="username"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Register;
