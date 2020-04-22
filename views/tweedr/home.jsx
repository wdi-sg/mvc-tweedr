var React = require('react');
var Layout = require('../components/layout.jsx');

class Home extends React.Component {
  render() {
    const tweeds = this.props.allTweeds.map(allTweeds =>{
        return (
            <div className = "single-tweed">
                <p>"{allTweeds.content}" - By user: {allTweeds.name}</p>
            </div>
        )
    });


    return (
      <Layout>
            <h1>Home</h1>
            <form action="/home" method="POST">
                <div class="form-group">
                    <textarea name = "newTweed" className="form-control" rows="3" id="comment" placeholder="What's on your mind?"></textarea>
                    <button type="submit" class="btn btn-outline-primary">Post</button>
                </div>
                  <p className ="latest">Latest tweeds </p>
                  <div className = "display-tweeds">
                    {tweeds}
                  </div>
            </form>
        </Layout>
    );
  }
}

module.exports = Home;