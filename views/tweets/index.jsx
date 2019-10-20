var React = require('react');
var Layout = require('../defaultlayout');

class Home extends React.Component {
	render() {
        console.log(this.props.allTweets);
        const tweets = this.props.allTweets.map(el => {
            return (
                <div class="alert alert-info" role="alert">
                {el.id} : {el.content}
                </div>
            )
        })
		return (
			<Layout>
                <div className='text-center'>

                <h3 className='m-2 display-1'> All Tweets </h3>
                <div className="container col-5">
                    {tweets}
                </div>
                </div>
			</Layout>
		);
	}
}

module.exports = Home;
