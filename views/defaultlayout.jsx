var React = require('react');

class DefaultLayout extends React.Component {
	render() {
		const navStyle = {
			'backgroundColor': '#78a9cc'
		};
		const aStyle = {
			color: 'black'
		};

		const imgStyle = {
			width: '100%',
			maxWidth: '400px',
			textAlign: 'center'
		};
		return (
			<html>
				<head>
					<link
						rel='stylesheet'
						href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
						integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
						crossorigin='anonymous'
					/>
					<title>tweedr</title>
				</head>
				<body>
					<nav className='navbar navbar-light' style={navStyle}>
						<ul className='nav justify-content-center nav-tabs'>
							<li className='nav-item'>
								<a className='nav-link ml-2' href='http://localhost:3000/artists' style={aStyle}><strong>TWEEDR</strong>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='http://localhost:3000/artists/1/songs' style={aStyle}>
									Songs By Artist 1
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='http://localhost:3000/register' style={aStyle}>
									Register!
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='http://localhost:3000/login' style={aStyle}>
									Log In
								</a>
							</li>
						</ul>
					</nav>

					<div>
						{this.props.children}
					</div>

				</body>
			</html>
		);
	}
}

module.exports = DefaultLayout;
