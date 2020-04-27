var React = require("react");

class Registered extends React.Component {
    render() {
        console.log("New Registered User");
        console.log("===================");
        let user = this.props.name;

        return (
            <html>
                <head />
                <body>
                    <h1>Welcome to Tweedr {user}!</h1>
                </body>
            </html>
        );
    }
}

module.exports = Registered;
