var React = require("react");
const Layout = require("./layout");

class Options extends React.Component {
    render() {
        // console.log(this.props.types);
        return (
        <html>
        <head />
        <body>
            <Layout/>
            <button className="proceed-to-tweets" type="submit" formaction="/all-tweets" method="GET">Yes, log me in! 🙌🏽</button>
            <button className="proceed-to-seeyou" type="submit" formaction="/laters" method="GET">Nah, I'll be back later! 👋🏼</button>
        </body>
      </html>
        );
    }
}

module.exports = Options;