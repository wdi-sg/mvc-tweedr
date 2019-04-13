var React = require("react");
var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
  render() {

    let elements = this.props.tweets.map((item) => {
        return <li>{ item.content } Post Date: { item.created_at } </li>
    });

    return (
            <DefaultLayout title="Home">
                <h3>Hello</h3>
                <ul>
                    { elements }
                </ul>
            </DefaultLayout>
    );
  }
}

module.exports = Home;