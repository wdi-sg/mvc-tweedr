var React = require("react");

class favorite extends React.Component {
  render() {
    console.log(this.props);
    const name = this.props.user[0].name;

    const tweet=this.props.tweets.map(tweet=>
        {
            console.log(tweet);
            const url="/tweet/" + tweet.id;
            return <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <p  class={"mt-3"}>Tweet: <a href={url}>{tweet.tweetstext}</a></p>

            <div class = {"row"}>
            <div class = {"col-12 mx-auto border"}>
            {/*<form method="POST" action="/favorite"  style={{textAlign: "Center"}}>
            <input  class= "favorite" type="text" name="favorite_id" value = {tweet.id} style={{display:"none"}} ></input>
            <input  class= "username" type="text" name="username" value = {name} style={{display:"none"}} ></input>
            <input type="submit" value="favorite"></input>
            </form>*/}
            <button class="favorite" value={tweet.id}>Add to Favorite</button>
            </div>
            {/*<div class = {"col-6 mx-auto border"}>
            <form method="POST" action="/favorite?_method=delete"  style={{textAlign: "Center"}}>
            <input  class= "notfavorite" type="text" name="notfavorite_id" value = {tweet.id} style={{display:"none"}} ></input>
            <input  class= "username" type="text" name="username" value = {name} style={{display:"none"}} ></input>
            <input type="submit" value="not favorite"></input>
            </form>
            </div>*/}
            </div>

            </div>
            </div>



        });


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


          <div class={"container mt-3 mb-5 tweetBox"}>
                        <div class={"row align-bottom border"}>
            <div class={"col-12 mt-5 text-center"}>
            <h1  class={"mt-3"}>Welcome {name} to Tweeder</h1>
            </div>
            </div>

            {tweet}


          </div>
          <script src="/script/home.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = favorite;