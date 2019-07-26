var React = require("react");

class Home extends React.Component {
    render() {
        console.log(this.props);
        return (
            <html>
                <head/>
                <body>
                    <h3> Hello </h3>
                </body>
            </html>
        );
    }
}

module.exports = Home;
