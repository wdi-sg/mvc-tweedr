const React = require("react");
const DefaultLayout = require('./layouts/default');


class Home extends React.Component {
  render() {

    let headerTitle = 'Home | Tweedr';
    let user = this.props.user;

    return (

      <DefaultLayout title={headerTitle}>
        <p> Hello {user.name}! </p>
        <div className="home">
            <h1 className="header-text"></h1>
            <div className="home-artists">
                <a href="./artists"className="home-p">Artists</a>
            </div>
            <div className="home-songs">
                    <a href="./songs"className="home-p">Songs</a>
            </div>
            <div className="home-playlists">
                    <a href="./playlists"className="home-p">Playlists</a>
            </div>
        </div>

      </DefaultLayout>
    );

  }
}

module.exports = Home;