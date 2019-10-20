const React = require("react");
const Layout = require('./layouts/default');

class Login extends React.Component {
    render() {
        return (
            <Layout pageTitle="Login for Tweedr">
                {this.props.message}
                <h1 className="display-4">Login</h1>
                <form method="POST" action="/login">
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" type="text" placeholder="username" name="username" required/>
                    </div>
 
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="password" name="password" required/>
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Login"/>
                </form>

            </Layout>
        );
    };
};

module.exports = Login;