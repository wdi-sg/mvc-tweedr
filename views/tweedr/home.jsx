var React = require("react");

class Home extends React.Component {
  render() {
      let list;
      if(this.props.result === null) {
          list= null
      } else {
        list = this.props.result.map(item => {
            return(
                <li className="list-group-item">
                <blockquote class="blockquote text-center">
  <p class="mb-0">{item.tweet}</p>
  <footer class="blockquote-footer">{item.username}</footer>
</blockquote>
                </li>
            )
        })
      }
   
    return (
      <html>
        <head>
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
            <div className="container mt-5">
            <h3 className="display-4 text-center border-bottom">TWEEDR </h3>
            <h4 className="text-center">Welcome {this.props.username}</h4>
            <div className="container text-center border-bottom pb-3 pt-3">
            <a href="/tweedr/users" className="btn btn-warning btn-lg">See All Users</a>
            <a href="/tweedr/following" className="btn btn-secondary btn-lg ml-3">Following</a>
            <a href="/tweedr/followers" className="btn btn-secondary btn-lg ml-3">Followers</a>
            </div>
           

            <div className="container text-center mt-2">
            <p class="lead">
Got Something to Say?</p>
            <form action="/addtweet" method="POST">
                <textarea rows="4" cols="100" type="text" name="tweet" placeholder="Write your tweet" className=""/> <br/>
                <button className="btn btn-primary btn-lg" type="submit">Add Tweed?</button>
                </form>
</div>
               
<h2>Your Tweedr Feed:  </h2>
<ul className="list-group mt-3">
{list}
</ul>
            </div>
       
        </body>
      </html>
    );
  }
}

module.exports = Home;
