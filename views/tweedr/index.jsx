var React = require("react");

class Index extends React.Component {
  render() {
    //     let namesArray = this.props.allTweedr;
    //     const list = namesArray.map(username => {
    //     return <option value={username.id}>{username.name}</option>
    // });
    // console.log(this.props.name);
    //TODO: find a way to do {this.props.allTweedr[i].name} to print out the user's name because {this.props.allTweedr[0].name prints out the first name from users' table}

    return (
      <html>
        <head />
        <body>
            <h3>Hello {this.props.allTweedr.name}</h3>
            <p></p>
            <p></p>
            <p></p>
            <h3>Wana make a tweet? Click the below link</h3>
                <a href='/new'>Create new tweet</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>To see all your previous tweets, click here</h3>
                <a href='/show'>Show all tweets</a>
            <p></p>
            <p></p>
            <p></p>
            <h3>Tired of tweeting? Logout from below</h3>
            <a href="/logout">Log out</a>
        </body>
      </html>
    );
  }
}

module.exports = Index;