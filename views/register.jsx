var React = require("react");

class Register extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h1>Don't have an account? Sign up with us! NOWWWWW</h1>

          <form method="POST" action="registerUser">
          <p>
          Name <input type="text" name="name" />
          </p>
            <p>
          Username <input type="text" name="user_name" />
          </p>
          <p>
          Email <input type="email" name="email" />
          </p>
           <p>
          Password <input type="text" name="password" />
          </p>
          <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;