var React = require("react");
var DefaultLayout = require("../layouts/default");
var EditForm = require("../components/edit-form");
var Dashboard = require("../components/dashboard");

class Home extends React.Component {
	render() {
		let form = (<EditForm tweet={this.props.tweet} />);
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-6 offset-1">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Edit Tweet</h5>
								{form}
							</div>
						</div>
					</div>
					<div className="col-4">
						<Dashboard username={this.props.username}/>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Home;
