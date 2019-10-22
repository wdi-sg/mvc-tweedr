const React = require("react");
const Layout = require('./layout');
const Nav = require('./nav');

class Show extends React.Component {
    render() {
        return (
            <Layout>
                <Nav>
                    {this.props.cookies.username}
                </Nav>
                <div className="jumbotron">
                    <h1 className="display-1">ERROR 404</h1>
                    <img className="img-fluid" src="https://goknews.com/wp-content/uploads/2017/02/twitter-in-loss.jpg"/>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;