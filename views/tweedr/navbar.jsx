
var React = require('react');

class Navbar extends React.Component {
  render() {

   
      return(<nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#e3f2fd"}}>
  <a class="navbar-brand mb-0 h1" href="#">Tweedr</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="/tweedr/home" className="display-3">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/tweedr/users">See All Users</a>
      </li>
      
      
      
    </ul>
    <form method="POST" action="/logout" class="form-inline my-2 my-lg-0">
  
      
      <button class="btn btn-outline-secondary my-2 my-sm-0 text-right" type="submit">Log Out</button>
    </form>
  
  </div>
</nav>);


  }
}


module.exports = Navbar;