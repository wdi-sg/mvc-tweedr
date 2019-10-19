const React = require("react");
const Layout = require('../layout');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <form method="POST" action="/new">
                    <div>
                        <label>Keep it within 70 characters!</label>
                    </div>
                    <div>
                        <textarea maxLength="70" name="content" rows="5" cols="33" required/>
                    </div>
                    <input type="submit" value="Tweet!"/>
                </form>
            </Layout>
        );
    };
};

module.exports = New;