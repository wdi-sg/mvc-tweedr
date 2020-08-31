var React = require("react");

export default class Post extends React.Component {
  render() {
    return (
        <div>
            <form method="POST" action="/profile">
            <h1> Log in </h1>
                Username: <input type="text" name="userhandle" />
                Password: <input type="password" name="password" />
                <input type="submit" name="submit" value="Login"/>
            </form>
            <form method="POST" action="/register">
            <h1> Register </h1>
                Username: <input type="text" name="userhandle" />
                Password: <input type="password" name="password" />
                <input type="submit" name="submit" value="Register"/>
            </form>
        </div>
    )
  }
};