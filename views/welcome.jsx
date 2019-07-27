const React = require("react");
const FrontLayout = require('./layouts/frontpage');


class Welcome extends React.Component {
  render() {

    let headerTitle = 'Welcome | Tweedr';
    let user = this.props.user;

    return (

      <FrontLayout title={headerTitle}>

        <h1> Welcome to Tweedr, {user.name}!</h1>

        <a href="./home">Go to home</a>
        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="./artists"className="home-p">Create </a>
            </div>
            <div className="home-songs">
                    <a href="./songs"className="home-p">Songs</a>
            </div>
            <div className="home-playlists">
                    <a href="./playlists"className="home-p">Playlists</a>
            </div>
        </div>

      </FrontLayout>
    );

  }
}

module.exports = Welcome;