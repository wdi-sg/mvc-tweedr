var React = require("react");

class playlist extends React.Component {
  render() {
    console.log(this.props)

    let userButtons = (
        <div class='my-3 d-flex justify-content-end'>
                <div>
                    <form method="get" action="/register">
                        <input type="submit" value="Register" class="btn btn-dark rounded-pill" style={{width:"100px"}}/>
                    </form>
                </div>
                <div>
                    <form method="get" action="/login">
                        <input type="submit" value="Login" class="ml-2 btn btn-dark rounded-pill" style={{width:"100px"}}/>
                    </form>
                </div>
        </div>);

    if( this.props.loggedIn === true){
        userButtons = (
            <div class='d-flex my-3'><h2><u>Welcome, {this.props.username}</u></h2>
                <div class='ml-auto'>
                    <form method="post" action="/logout?_method=delete">
                        <button class="btn btn-dark rounded-pill" style={{width:"100px"}}>Log out</button>
                    </form>
                </div>
            </div>)}
    let list = this.props.tweets.map ((element) => {
        return (
            <div class="my-2">
                <form method="get" action={"/playlist/"+element.id}>
                    <input type="submit" class="btn btn-block btn-light border" style={{height:"70px"}} value={element.content}/>
                </form>
            </div>
        )
    });

    return (
        <html>
        <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"/>
        </head>
        <body style={{backgroundColor:"#A3C4C9"}}>
            <div class='container border' >
                    {userButtons}
                <div class="row d-flex justify-content-center">
                    <h1 style={{marginLeft:"-200px"}}>Tweedr</h1>
                </div>
                <div class="row d-flex justify-content-center">
                    <h3>What Ya Thinkin'?</h3>
                </div>
                <div class='row d-flex p-3'>
                    <form class="input-group mb-3" method="get" action="/tweet/new">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-light btn-outline-secondary" type="submit">Tweedrz</button>
                        </div>
                    </form>
                </div>
                <div class="row nav flex-column rounded-lg p-3 m-1" style={{backgroundColor:"#999999"}}>
                    {list}
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = playlist;