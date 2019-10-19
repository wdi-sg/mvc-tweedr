var React = require("react");

class Home extends React.Component {
  render() {
    let message = ""
      if(this.props.message === "Error: Please Try Again"){
       message = <div class="alert alert-danger" role="alert">
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
          <div className="container mt-4 text-center">
          <h3>Please log In </h3>
          {message}
          <form action="/login" method="POST">
          <p><input type="text" name="username" placeholder="User Name" className="form-control form-control-lg"/></p>
          <p> <input type="password" name="password" placeholder="Password" className="form-control form-control-lg"/></p>
          <button className="btn btn-primary btn-lg" type="submit">Log In</button>
          </form>
          </div>
        
        </body>
      </html>
    );
  }
}

module.exports = Home;
