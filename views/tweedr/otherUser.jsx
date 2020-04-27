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
    if(this.props.loggedIn === true){
        userButtons = (
            <div id="welcome" class='d-flex my-3' ><b class='d-flex'>Welcome, {this.props.username}</b>
                <div class='ml-auto'>
                    <form method="post" action="/logout?_method=delete">
                        <button class="btn btn-dark rounded-pill" style={{width:"100px", boxShadow: "2px 2px 4px #000000"}}>Log out</button>
                    </form>
                </div>
            </div>
        )
    }
    let list = this.props.results.map ((element) => {
        return (
            <div class="mb-2">
                <div class="btn btn-block btn-light" style={{boxShadow: "2px 2px 4px #000000"}}>
                    <div class="d-flex justify-content-start" style={{fontSize:"12px"}}>@{element.name}:
                    </div>
                    <div id="content" class="d-flex justify-content-start m-1">
                        {element.content}
                    </div>
                        <button name={element.id} class="likeButton d-flex justify-content-start mt-2" style={{backgroundColor:"rgba(255,255,255,0)", border:"none"}}>
                            ♥
                        </button>
                </div>
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
            <div class='container'>
            {userButtons}
                    <div class="row d-flex justify-content-center">
                        <h2 style={{marginLeft:"-200px"}}>You're looking at {this.props.results[0].name}'s page</h2>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <h4>What Now'?</h4>
                    </div>
                    <form class='row m-1'method="GET" action='/'>
                        <button class='btn btn-block my-4' style={{backgroundColor:"#D7D6D6", boxShadow: "2px 2px 4px #000000"}}>
                            <b>Back to tweet list</b>
                        </button>
                    </form>
                    <div class='row d-flex'>
                        <div class='col-4'>
                            <div class="row nav flex-column rounded-lg p-3 m-1" style={{backgroundColor:"#999999", boxShadow: "2px 2px 4px #000000"}}>
                                <div class="mb-2">
                                    <div class="btn btn-block btn-light" style={{boxShadow: "2px 2px 4px #000000"}}>
                                    Following: <br/>user1, <br/>user2, <br/>user3
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='col-8'>
                            <div class="row nav flex-column rounded-lg p-3 m-1" style={{backgroundColor:"#999999", boxShadow: "2px 2px 4px #000000"}}>
                                {list}
                            </div>
                        </div>
                    </div>
                </div>


        </body>
        <script src="./scriptUser.js"></script>
      </html>
    );
  }
}

module.exports = playlist;