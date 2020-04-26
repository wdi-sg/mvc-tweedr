var React = require("react");

class playlist extends React.Component {
  render() {
    console.log(this.props)
    let list = this.props.results2.map ((element) => {
        return (
            <div class="mb-2">
                <div class="btn btn-block btn-light" style={{height:"90px", boxShadow: "2px 2px 4px #000000"}}>
                    <div class="d-flex justify-content-start" style={{fontSize:"12px"}}>@{element.name}:
                        <form class="ml-auto" method="POST" action={"/tweet/delete/"+element.id}>
                            <button style={{backgroundColor:"rgba(255,255,255,0)", border:"none", margin:"-10px -10px 0 0"}}>
                                <b>x</b>
                            </button>
                        </form>
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
                <div class="row d-flex justify-content-center">
                    <h1 style={{marginLeft:"-200px"}}>Tweedr</h1>
                </div>
                <div class="row d-flex justify-content-center">
                    <h3>What Ya Thinkin'?</h3>
                </div>
                <div class="row nav flex-column rounded-lg p-3 m-1" style={{backgroundColor:"#999999", boxShadow: "2px 2px 4px #000000"}}>
                    {list}
                </div>
            </div>
        </body>
        <script src="./script.js"></script>
      </html>
    );
  }
}

module.exports = playlist;