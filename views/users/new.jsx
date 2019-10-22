const React = require("react");
const Layout = require('../layout');

class New extends React.Component {
    render() {
        return (
            <Layout>

                <div className="jumbotron">
                    <h1 className="display-4">Sign up</h1>
                    <form method="POST" action="/users/new">
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" type="text" placeholder="username" name="username" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="password" name="password" required/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" type="text" placeholder="email" name="email" required/>
                        </div>
                        <input className="btn btn-primary btn-lg" type="submit" value="Sign up"/>
                        <a className="ml-3" href="#"><button type="button" className="btn btn-outline-primary btn-lg">Terms & Conditions</button></a>
                    </form>
                </div>

           </Layout>
        );
    };
};

module.exports = New;