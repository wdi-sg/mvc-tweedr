var React = require("react");

class Home extends React.Component {
  render() {
    let message = ""
    if(this.props.message === "Thank you For registering, Please Log in"){
     message = <div class="alert alert-success" role="alert">
  {this.props.message}
</div>
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
          <div className="container text-center mt-5">
          <h3 className="display-3 border-bottom">Welcome to Tweedr</h3>
          {message}
          <h4 className="lead">It's Like twitter but without all the fancy s**t</h4>
          <div className="container mt-4">
          <a href="/register" className="btn btn-primary btn btn-lg ">Register</a>
          <a href="/logIn" className="btn btn-warning ml-5 btn-lg">Login</a>
          </div>
        
          </div>
          
        </body>
      </html>
    );
  }
}

module.exports = Home;
