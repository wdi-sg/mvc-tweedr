var React = require("react");
const Navbar = require("./navbar.jsx");

class Home extends React.Component {
  render() {
    let list = ""
    if(this.props.message === "empty" ) {
      list = ""
    } else {
       list = this.props.result.map(item =>{
       
        return(
            <li className="list-group-item"><a href="#">{item.tweet}</a> </li> 
        )
       
       
   })
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
          <Navbar/>
            <div className="container text-center">
            <h3 className="display-4 border-bottom ">Tweets </h3>
         <ul className="list-group">
        {list}
         </ul>
            </div>
         
        </body>
      </html>
    );
  }
}

module.exports = Home;
