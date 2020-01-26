var React = require("react");
const Header = require("./header");


class SignPage extends React.Component {
  render() {
    return (
      <html>
      <head>
      <link rel="stylesheet" href="style.css" type = "text/css" />
      </head>
        <Header>
        <title>Sign Up/Log In</title>
        </Header>
        <body>
            <div className ="container-fluid">
                <div className ="row">
                    <div className =".col-sm-4" style= {{margin: "0 auto"}}>
                        <img id = "logo" src = "https://image.flaticon.com/icons/svg/1384/1384075.svg" style= {{size: "150px"}}/>
                        <h2> See what’s happening in the world right now.</h2>
                    </div>
                    <div className=".col-md-8" style= {{margin: "0 auto"}}>
                      <form method = "POST" action =  "/register">
                        <h3>Create an Account</h3>
                        <p> Username: <input type = "text" name = "username"/> </p>
                        <p> Password: <input type = "password" name = "password"/> </p>
                        <input type = "submit" value = "Sign Up"/>
                      </form>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = SignPage;
