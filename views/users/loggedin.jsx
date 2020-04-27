var React = require("react");

class Loggedin extends React.Component {
    render() {
        console.log("User Logged In");
        console.log("===================");
        let user = this.props.name;
        console.log(this.props);

        return (
            <html>
                <head />
                <body>
                    <h1>Welcome back to Tweedr {user}!</h1>
                </body>
            </html>
        );
    }
}

module.exports = Loggedin;
