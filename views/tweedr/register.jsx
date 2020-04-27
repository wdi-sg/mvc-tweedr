var React = require("react");

class playlist extends React.Component {
  render() {
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
            <div class='container mt-5'>
                <div class="row d-flex justify-content-center">
                    <h1 style={{marginLeft:"-200px"}}>Tweedr</h1>
                </div>
                <div class="row d-flex justify-content-center">
                    <h3>Register</h3>
                </div>
                <div class='row d-flex justify-content-center'>
                    <div class=" w-50 d-block flex-column rounded-lg p-3 m-1" style={{minWidth:"350px", backgroundColor:"#999999", boxShadow: "2px 2px 4px #000000"}}>
                        <div class="mb-2">
                            <div class="btn btn-block btn-light d-flex justify-content-center" style={{boxShadow: "2px 2px 4px #000000"}}>
                               <form action="/register" method="POST">
                                    <div class='row d-flex'>
                                        <div class='col'>
                                            <p>name</p>
                                            <p>password</p>
                                        </div>
                                        <div class='col'>
                                            <p><input name="name"/></p>
                                            <p><input name="password"/></p>
                                        </div>
                                    </div>
                                    <div class='row d-flex justify-content-center'>
                                        <input type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <script src="./script.js"></script>
      </html>
    );
  }
}

module.exports = playlist;