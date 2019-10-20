const React = require("react");
const Layout = require('./layouts/default');

class Tweet extends React.Component {
    render() {
        return (
            <Layout>
                {this.props.message}
                <h1 className="display-4">New Tweet!</h1>
                <form method="POST" action="/tweet">
                    <div className="form-group">
                        <label>Tweet</label>
                        <textarea className="form-control" placeholder="tweet" name="tweet" required>
                    </textarea>
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Tweedr!"/>
                </form>

            </Layout>
        );
    };
};

module.exports = Tweet;