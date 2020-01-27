var React = require("react");
var Layout = require('../layout');

class home extends React.Component {
  render() {
     console.log("THIS IS home PAGE");
    // console.log(this.props);
    let path = '/profile';
    let tweetArr = this.props.tweets
    let feed = tweetArr.map((item)=>{
        return(
        <li class="list-group-item">{item.tweet}</li>
        )
    })

    return (
      <Layout username = {this.props.user}>
      <h1 class ="display-1 text-center">WELCOME {this.props.user}</h1>

          <form action = {path} method = "POST">
                 <div class="form-group">
                    <label for="exampleFormControlTextarea1">Tweet</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name = "tweet"></textarea>
                  </div>
              <input class="btn btn-secondary btn-lg" type="submit" value="Submit"/>
            </form>
                <div class = "container">
             <ul class="list-group">
             {feed}
                </ul>
             </div>
        </Layout>
    );
  }
}

module.exports = home;