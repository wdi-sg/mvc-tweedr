var React = require('react');
var Layout = require('../defaultlayout');

class Dirtbag extends React.Component {
	render() {
			console.log('awesome possum');
				return (
					<Layout>
						<div className='text-center col-12 d-flex flex-wrap justify-content-center'>
							<h2 class='m-3 col-12'>New Tweet</h2>
							<form class='m-3' method='POST' action='/tweets'>
								<input type='text' name='content' required />
								<br />
								<input type='submit' value='Submit' className='m-2' />
							</form>
						</div>
					</Layout>
				);
	}
}

module.exports = Dirtbag;
