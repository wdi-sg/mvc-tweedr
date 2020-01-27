var React = require("react");
const Header = require("./header");

class Feed extends React.Component {
  render() {
    let profileName = this.props.username;
    console.log(profileName);
    return (
      <html>
        <head>
        <title> Home </title>
        </head>
        <Header/>
        <body>

            <div>
                Welcome,{profileName}!
            </div>

        </body>
      </html>
    );
  }
}

module.exports = Feed;
