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
            <div className="container">
                <div className="row">
                    <div className="col-md-8" style = {{backgroundColor: "#6FB7A3"}}>
                    <form method = "POST" action = "/tweet">
                        <p> What's on your mind,{profileName}? <input type = "text" name= "tweet" style= {{height: "100px", maxLength:"200"}}/> </p>
                        <p><input type = "submit" value = "Submit"/></p>
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
