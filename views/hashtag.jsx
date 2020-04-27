var React = require("react");

class Hashtags extends React.Component {
  render() {
    let allHashtags;
    if(this.props.hashtags !== undefined){
      allHashtags = this.props.hashtags.map(hashtag => {
          return <li>{hashtag.hashtag}</li>
      });
    }else {
      allHashtags = <li>No hashtag yet!</li>;
    }
    return (
      <html>
        <head />
        <body>
          <h1>All hashtags</h1>
          <ul>
            {allHashtags}
          </ul>
        </body>
        <div>
          <a href="/hashtag/new">Add a new hashtag!</a>
        </div>
      </html>
    );
  }
}

module.exports = Hashtags;