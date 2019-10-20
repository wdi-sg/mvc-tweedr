var React = require("react");
const Head = require('./head.jsx');
class Login extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <body class="loginPage">

            <nav class="navbar navbar-light bg-primary p-4">
                <ul class="navbar-nav flex-row ml-auto">
                    <li class="mx-3">
                        <form method="GET" action="/sign/in">
                            <input type="submit" value="Login"/>
                        </form>
                    </li>
                    <li class="mx-3">
                        <form method="GET" action="/sign/up">
                            <input type="submit" value="Register"/>
                        </form>
                    </li>
                </ul>
            </nav>

                <div class="row ">
                    <div class="col-6">
                        <h1 class="mt-4 ml-3">Welcome to Tweedr!</h1>
                    </div>
                    <div class="col-6 bg-white align-content-center">
                        <ul class="my-4">
                            <li><h2>Find friends</h2></li>
                            <li><h2>Share your stories</h2></li>
                            <li><h2>Inspire communities</h2></li>
                        </ul>
                    </div>
                </div>

        </body>
      </html>
    );
  }
}

module.exports = Login;