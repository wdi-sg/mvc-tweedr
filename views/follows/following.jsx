const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class Index extends React.Component {
    render() {
        let rows = this.props.result.map((tweet,index)=>{
            let {username,users_id} = tweet;
            return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{username}</td>
                    <td><a href={"/users/"+users_id}>View</a></td>
                </tr>
            );
        })

        return (
            <Layout>
                <Nav>
                    {this.props.req.cookies.username}
                </Nav>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Username</th>
                            <th scope="col">Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </Layout>
        );
    };
};

module.exports = Index;