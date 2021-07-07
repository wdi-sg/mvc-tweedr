var React = require("react");
const Layout = require('./layout.jsx');
const Onetweet = require('./onetweet.jsx');

class Register extends React.Component {
    render() {
        console.log(user);

        let itemElements = this.props.user.map((tweet) => {
                return <Onetweet tweetData={tweet}> </Onetweet>
            });

        return (
            <Layout>
            <h1>User's page!</h1>
                <form method="POST" action="/usertweet">
                    <h2>Tweed to the world!</h2>
                    <input name="user_id" value={this.props.user.user_id} hidden />
                    <p><input name="content" /></p>
                    <input type="submit" value="Tweed!" />
                </form>

            </Layout>
        );
    }
}

module.exports = Register;