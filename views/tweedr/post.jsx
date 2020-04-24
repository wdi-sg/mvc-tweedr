var React = require('react');

class Post extends React.Component {
  render() {
    console.log(this.props.types);
    return (
      <html>
        <head/>
        <body>
        <h1>Post your tweets!</h1>
        <form method="POST" action="/post">
          TWEEDR:
          <textarea type="text" name="tweet"></textarea>
          <button type="submit">Post!</button>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Post;
