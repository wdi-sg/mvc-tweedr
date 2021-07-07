var React = require('react');

class Form extends React.Component {
	render() {
		let editLink = `/edit/${this.props.tweet[0].username}/${this.props.tweet[0].id}?_method=PUT`;
		return (
			<div>
				<form className="row" method="POST" action={editLink}>
					<div className="col-10">
						<input type="text" className="form-control" name="content" placeholder="Tweedr your thoughts!" value={this.props.tweet[0].content}/>
					</div>
					<div className="col-2 text-right">
						<button type="submit" className="btn btn-primary btn-block">Edit</button>
					</div>
				</form>
			</div>
		);
	}
}

module.exports = Form;