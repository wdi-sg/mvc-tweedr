var React = require("react");

class Home extends React.Component {
  render() {
    const loginForm = (
            <form action="/login" method="get">
                <input type="text" name="username" placeholder="username"></input>
                <input type="text" name="password" placeholder="password"></input>
                <input type="submit" value="login"></input>
            </form>
        )

    const register = <a href="/register">Don't have an account?</a>

    return (
      <html>
        <head />
        <body>
            <div>
                <h1>TWEEDR</h1>
            </div>
            <div>
                {loginForm}
                {register}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;