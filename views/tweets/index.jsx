var React = require('react');
var Layout = require('../defaultlayout');

class Home extends React.Component {
	render() {
        console.log(this.props.allTweets);
        const tweets = this.props.allTweets.map(el => {
            return (
                <p>{el.id} : {el.content}</p>
            )
        })
		return (
			<Layout>
                <h3> Hello TWEEDR USERS </h3>
                {tweets}
			</Layout>
		);
	}
}

module.exports = Home;
