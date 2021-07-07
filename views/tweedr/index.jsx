var React = require("react");

class Home extends React.Component {
  render() {

    let Navbar = require('./navbar.jsx');

    let allTweeds;

    if(this.props.tweeds){
        allTweeds = this.props.tweeds.map(x=>{
            let content = x.tweed;
            let currentDate = new Date();
            let today = x.created_at;
            let date = `${today.getFullYear()}/${today.getMonth() +
            1}/${today.getDate()}`;
            let time =
            `${today.getHours()}:` + `${today.getMinutes()}:${today.getSeconds()}`;
            let username = x.username;
            let image = x.image;
            console.log(x);
            return  <div class="jumbotron jumbotron-fluid">
                      <div class="container">
                        <span class="lead mr-2">@{username}</span>
                        <img style={{height: "5" + "%"}, {width: "5" + "%"}} src={image} class="card-img-top rounded-circle align-self-center mr-2" alt="default photo"/>
                        <span class="mr-2">{date}</span>
                        <span class="mr-2">{time}</span>
                        <h2>{content}</h2>
                      </div>
                    </div>

        });
    } else {
        allTweeds = <p>You've not made any tweeds yet, let's get tweeding!</p>;
    }


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>

          <Navbar/>
          <div className="container">
            <h1 className="display-4 text-center mt-5">Hello {this.props.username}</h1>


            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Tweed
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">@{this.props.username}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                       <form className="col align-self-center" method='POST' action='/'>
                            <div className="form-group">
                            <textarea type="text" className="form-control" name="tweed" placeholder="The weather is nice today" required/>
                            </div>
                            <div className="form-group">
                            <input type="number" className="form-control d-none" name="users_id" value={this.props.userID} required/>
                            </div>
                            <button type="button" class="btn btn-secondary mr-4" data-dismiss="modal">Don't tweed</button>
                            <button type="submit" class="btn btn-primary">Tweed</button>
                        </form>
                  </div>
                </div>
              </div>
            </div>


            <h5 className="mt-5">Tweeds:</h5>
            <ul class="list-group">
              {allTweeds}
            </ul>
          </div>



        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;