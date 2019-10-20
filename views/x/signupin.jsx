var React = require("react");
const Head = require('./head.jsx');

class Home extends React.Component {
  render() {
    let heading = this.props.h1;
    if(heading === 'Register Page'){
        var action = "/sign/up";
    } else if(heading === 'Login Page'){
        var action = '/sign/in';
    }
    return (
      <html>
        <Head/>
        <body>
          <div class="py-2 px-4">
              <h2>{heading}</h2>
              <form method="POST" action={action}>
                username: <input type="text" name="username"/><br/>
                password: <input type="text" name="password"/><br/>
                <input type="submit" value="submit"/>
              </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;