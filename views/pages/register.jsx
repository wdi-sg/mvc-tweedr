var React = require("react");
var Layout = require('../layout/layout.jsx');

class Register extends React.Component {
    render () {
        return (
            <Layout>

            <div class="container">

                <h1>Register New Account</h1>

                <form method="POST" action="/register">

                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" name="username" placeholder="Select a username"/>
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="Password"/>
                      </div>

                      <div class="form-group">
                        <label for="profile_img">Profile Image</label>
                        <input type="text" class="form-control" name="profile_img" placeholder="Insert a direct link to img"/>
                      </div>

                      <button type="submit" class="btn btn-secondary">Submit</button>
                </form>
            </div>
        </Layout>
        )
    }
};

module.exports = Register;