const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class Show extends React.Component {
    render() {
        let {id,username}= this.props.result[0];
        return (
            <Layout>
                <Nav>
                    {this.props.req.cookies.username}
                </Nav>
                <div className="jumbotron">
                    <h1 className="display-4">{username}</h1>
                    <hr className="my-4"/>
                    <form method="POST" action={"/users/"+id} className="ml-auto">
                        <input type="submit" className="btn btn-primary btn-lg" value="Follow"/>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = Show;