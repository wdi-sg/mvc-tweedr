var React = require("react");

class register extends React.Component {
  render() {

    //console.log(this.props.types);
    return (
      <html>
        <head />
        <link rel={"stylesheet"} href={"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"} integrity={"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"} crossorigin={"anonymous"}></link>
                        <link rel={"stylesheet"} href={"style/style.css"}></link>
        <body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/login">Login</a>
      <a class="nav-item nav-link" href="/register">Register</a>
      <a class="nav-item nav-link" href="/user">Users</a>
       <a class="nav-item nav-link" href="/tweet">Tweeds</a>
        <a class="nav-item nav-link" href="/hash">Hash</a>
        <a class="nav-item nav-link" href="/favorite">Favorites</a>
    </div>
  </div>
</nav>


          <div class={"container mt-3 tweetBox"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Register Form</h1>
            </div>
            </div>
           <div class={"row"}>
                <div class = {"col-12"}>
                    <form method="POST" action="/register"  style={{textAlign: "Center"}}>
                    <span>Enter Login Name: </span>
                    <input  id= "loginname" type="text" name="loginname" placeholder="Enter Login Name" required
                            oninvalid="this.setCustomValidity('Enter Valid Login Name Here')"
                            oninput="this.setCustomValidity('')" ></input>
                    <br></br><br></br>

                    <span>Enter Password: </span>
                    <input type="text" name="password" placeholder="Enter Strong Password" required
    oninvalid="this.setCustomValidity('Enter Password Here')"
    oninput="this.setCustomValidity('')"></input>

                    <br></br><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
                </div>
            </div>

          </div>
        </body>
      </html>
    );
  }
}

module.exports = register;