const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <Nav>
                    {this.props.req.cookies.username}
                </Nav>
                <div className="jumbotron">
                    <form method="POST" action="/new">
                        <div className="form-group">
                            <label>Keep it within 70 characters!</label>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control" maxLength="70" name="content" required/>
                        </div>
                        <input className="btn btn-primary btn-lg" type="submit" value="Tweet!"/>
                    </form>
                </div>
            </Layout>
        );
    };
};

module.exports = New;