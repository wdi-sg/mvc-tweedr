var React = require('react');
var Layout = require('../components/layout.jsx');

class Root extends React.Component {
  render() {
    const tweeds = this.props.allTweeds.map(allTweeds =>{
        return (
            <div className = "single-tweed">
                <p>{allTweeds.content} - By user_id: {allTweeds.user_id}</p>
            </div>
        )
    });


    return (
      <Layout>
            <h1>Home</h1>
            <div class="form-group">
            <form action = '/register' method ="GET">
                <button type="submit" class="btn btn-outline-primary">Register</button>
            </form>
            <form action = '/login' method ="GET">
                <button type="submit" class="btn btn-outline-primary">Login</button>
            </form>
            </div>
              <p className ="latest">Latest tweeds </p>
              <div className = "display-tweeds">
                {tweeds}
              </div>
        </Layout>
    );
  }
}

module.exports = Root;