const React = require("react");

class Login extends React.Component {
    render() {
        return (
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
        );
    };
};

module.exports = Login;