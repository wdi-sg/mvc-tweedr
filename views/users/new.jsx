const React = require("react");

class New extends React.Component {
    render() {
        return (
            <form method="POST" action="/users/new">
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="username" name="username" required/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="password" name="password" required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="email" name="email" required/>
                </div>
                <input type="submit" value="Sign Up!"/>
            </form>
        );
    };
};

module.exports = New;