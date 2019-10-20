const React = require("react");
const Layout = require('./layouts/default');

class Register extends React.Component {
    render() {
        return (
            <Layout>
                {this.props.message}
                <h1 className="display-4">New User Registration</h1>
                <form method="POST" action="/register">
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" placeholder="username" name="username" required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" placeholder="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="password" name="password" required/>
                    </div>
                    <div className="form-group">
                        <label>Profile Description</label>
                        <input className="form-control" type="text" placeholder="description" name="description"/>
                    </div>
                    <div className="form-group">
                        <label>Profile Image (URL)</label>
                        <input className="form-control" type="text" placeholder="http://" name="user_img"/>
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Sign Up!"/>
                </form>

            </Layout>
        );
    };
};

module.exports = Register;