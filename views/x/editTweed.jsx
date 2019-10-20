var React = require("react");
const Navbar = require('./navbar.jsx');
const Head = require('./head.jsx');

class Edit extends React.Component {
    render(){
        console.log(this.props);
        let content = this.props.results[0]["content"];
        let id = this.props.results[0]["id"];
        return(
          <html>
            <Head />
            <body>
              <Navbar key1={this.props}/>
              <div class="container">
                  <form method="POST" action={"/tweed/"+id}>
                    <input id="WOYM" type="text" name="tweed" value={content}/><br/>
                    <input id="tweedBtn" type="submit" value="Tweed"/>
                  </form>
                  <form method="POST" action={'/deletetweed/'+id}>
                    <input type="submit" value="Delete"/>
                  </form>
              </div>
            </body>
          </html>
        )

    }
}

module.exports = Edit;