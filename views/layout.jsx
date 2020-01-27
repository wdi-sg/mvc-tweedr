const React = require("react");
const Footer = require("./footer");
const Navbar = require("./nav");

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.pagetitle}</title>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <div class="container">
                        <div class="nav">
                            <Navbar />
                        </div>
                    </div>
                    <div class="container">
                        {this.props.children}
                    </div>
                    <div class="container">
                        <Footer />
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Layout;