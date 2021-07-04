var React = require("react");

class Register extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head />
        <body>

        <div>
         <h1>Welcome to Tweedr</h1>
          <h4>What Ya Thinking?</h4>
        </div>

        <div>
                  <h3>Register</h3>
        </div>
        <div>
            <form action="/register" method="POST">
            <p>Name <input name="name" required/></p>
            <p>Password <input type="password" name="password"/></p>
            <p><input type="submit"/></p>
            </form>
        </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;