const React = require("react");
const Layout = require('../layout');

class Login extends React.Component {
    render() {
        return (
            <Layout>
                <form method="POST" action="/users/login">
                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="username" name="username" required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="password" name="password" required/>
                    </div>
                    <input type="submit" value="Log in"/>
                </form>
            </Layout>
        );
    };
};

module.exports = Login;