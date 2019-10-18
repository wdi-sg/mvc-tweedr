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
          <h3>Please log In </h3>
          <form action="/login" method="POST">
          <p><input type="text" name="username" placeholder="User Name"/></p>
          <p> <input type="text" name="password" placeholder="Password"/></p>
          <button className="btn btn-primary btn-lg" type="submit">Log In</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;
