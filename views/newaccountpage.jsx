var React = require("react");

class loginPage extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>
            <h1>CREATE NEW ACCOUNT</h1>
                <form method='post' action='/create'>
                    <input type='text' name='name' placeholder='username'/>
                    <input type='password' name='password' placeholder='password'/>
                    <input type='submit'/>
                </form>
        </body>
      </html>
    );
  }
}

module.exports = loginPage;