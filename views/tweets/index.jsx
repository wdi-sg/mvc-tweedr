var React = require("react");
var Layout = require('defaultlayout')

class Home extends React.Component {
    render() {
        console.log(this.props.types);
        return (
            <html>
                <head />
                <body>
                    <h3>Hello TWEED USERS</h3>
                </body>
            </html>
        );
    }
}

module.exports = Home;
