var React = require("react");

class Home extends React.Component {
  render() {
   
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
          <div className="container text-center">
          <h3 className="display-3">Please Register With a Username and Password </h3>
          <form action="/register" method="POST">
          <p><input type="text" name="username" placeholder="User Name" className="form-control form-control-lg"/></p>
          <p> <input type="password" name="password" placeholder="Password" className="form-control form-control-lg"/></p>
          <button className="btn btn-primary btn-lg" type="submit">Register</button>
          </form>
          </div>
         
        </body>
      </html>
    );
  }
}

module.exports = Home;
