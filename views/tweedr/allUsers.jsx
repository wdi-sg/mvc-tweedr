var React = require("react");
const Navbar = require("./navbar.jsx");
class Home extends React.Component {
  render() {
   let list = this.props.result.map(item =>{
        
        return(
            <li className="list-group-item"><a href={"/tweedr/users/" + item.id}> <h2>{item.username}</h2></a> 
            <form action="/follow" method="POST">
            <input type="hidden" name="id" value={item.id} />
            <button type="submit" className="btn btn-success" id="follow">Follow</button>
            </form>
            </li> 
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
          <Navbar/>
            <div className="container text-center">
            <h3 className="display-4 border-bottom ">All Users</h3>
            <a href="/tweedr/home" className="btn btn-primary btn-lg mt-3">Back To Home</a>
            
         <ul className="list-group mt-4">
        {list}
         </ul>
            </div>
         
            
        </body>
      </html>
    );
  }
}

module.exports = Home;
