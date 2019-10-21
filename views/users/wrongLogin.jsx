const React = require("react");
const Layout = require('../layout');

class Login extends React.Component {
    render() {
        return (
            <Layout>

                <div className="jumbotron">
                    <h1 className="display-4 text-danger">Wrong username or password</h1>
                    <form method="POST" action="/users/login">
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" placeholder="username" name="username" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="password" name="password" required/>
                        </div>
                        <input className="btn btn-primary btn-lg" type="submit" value="Log in"/>
                        <a className="ml-3" href="/users/new"><button type="button" className="btn btn-outline-primary btn-lg">Register</button></a>
                    </form>
                </div>

            </Layout>
        );
    };
};

module.exports = Login;