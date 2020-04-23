var React = require("react");

class Hashtags extends React.Component {
  render() {
    const allHashtags = this.props.allHashtags;
    let list = <ul style={{'display': 'none'}}></ul>;

    if (allHashtags) {
      const hashtag = allHashtags.map(hashtag => {
        return <li>{hashtag.content}</li>;
      });

      list = <ul style={{'display': 'block', 'listStyle': 'none'}}>{hashtag}</ul>;
    }

    return (
      <html>
        <head />
        <body>
          <h3 id='header'>#hashtags</h3>
          {list}
          <form method='GET' action='/hashtags/new'>
            <input type='submit' value='Add Hashtag'/>
          </form>
        </body>
      </html>
      );
  }
}

module.exports = Hashtags;