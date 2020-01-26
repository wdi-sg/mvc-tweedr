var React = require("react");
const Header = require("./header");

class Feed extends React.Component {
  render() {

    return (
      <html>
        <Header>
        <title>Sign Up/ Log In</title>
        </Header>
        <body>
            <div className ="container">
                <div className ="row">
                    <div className ="col">
                      <img src ="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/mdFUMX-w0Fu.png"/>
                    </div>
                    <div className="col">
                      <form method = "POST" action = {url}>

                      </form>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Feed;
