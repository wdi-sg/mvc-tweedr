var React = require('react');

class Register extends React.Component {
  render() {

    return (
      <html>
        <body>
          <div>
            <h1>Register</h1>
            <div>
                <form action="/register" method="POST">
                    <p>
                        name <input name="name"/>
                    </p>
                    <p>
                        password <input name="password"/>
                    </p>
                    <p>

                        <input type="submit"/>
                    </p>
                </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;
