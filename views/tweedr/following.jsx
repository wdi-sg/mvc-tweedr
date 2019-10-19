var React = require("react");

class Home extends React.Component {
  render() {
   let list = this.props.result.map(item =>{
        
        return(
           <li className="list-group-item"> {item.username}</li>
        )
       
       
   })
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
            <h3 className="display-4 border-bottom ">Following: </h3>
         <ul className="list-group">
        {list}
         </ul>
            </div>
         
            
        </body>
        <script src="/script.js"></script>
      </html>
    );
  }
}

module.exports = Home;
