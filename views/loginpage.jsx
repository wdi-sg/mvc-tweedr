var React = require("react");

class loginPage extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
            <h1>LOGIN PAGE</h1>
                <form method='post' action='/login'>
                    <input type='text' name='name' placeholder='username'/>
                    <input type='password' name='password' placeholder='password'/>
                    <input type='submit'/>
                </form>
                <a href='/create'>Create Account</a>
        </body>
      </html>
    );
  }
}

module.exports = loginPage;