var React = require("react");

class profilePage extends React.Component {
  render() {
    var profileCardStyle = {
        margin:'10px',
        width:'18rem'
    }
    var cardPostStyle ={
        margin:'10px 0'
    }
    var imageStyle = {
        height:'200px',
        width:'200px',
        margin: '10px auto',
        borderRadius :'100%',
        marginTop : '-30%'
    }

    var feed = {
        maxWidth:'100%',
    }

    var cardHeader = {
        margin:"20px 0",
        color:'white'
    }

    var cardHeaderStyle={
        marginTop:'-10%'
    }

    var profileText = {
        lineHeight:"0.5px"
    }

    var mapHead={
        height:'100px',
        width:'100px',
        marginTop: '10px'
    }

    var tweetCard = {
        margin:'10px 0'
    }


    var urlHome = '/twee_dr/homepage/'+this.props.id;
    var urlHomepage = '/twee_dr/homepage/'+this.props.id+'/post';
    var urlEditPage = '/twee_dr/editpost'+this.props.userTweets.tweetid;
    var urlDeletePage = '/twee_dr/editpost'+this.props.userTweets.tweetid;
    var mapAllTweets = this.props.userTweets.map(tweets=>{
        return(
            <div style={tweetCard}className="card">
                <div class="card-header">
                    <a className="navbar-brand"><img borderRadius="100%" width="30px" height="30px"  className="d-inline-block align-top" src={this.props.user.photo}/>{tweets.profilename}</a>
                </div>
                <div class="card-body">
                    <p class="card-text">{tweets.tweet}</p>
                    <div className="text-right">
                        <small class="text-muted">Posted at: {tweets.created_at}</small>
                        <a class="btn-sm" data-toggle="modal" data-target="#exampleModal" href={urlEditPage}>Editpost
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">EditPost</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>text post here</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </a>
                        <a class="btn-sm" href={urlDeletePage}>Delete post</a>
                    </div>
                </div>
            </div>
        );
    });

    var mapAllPhoto = this.props.userPhoto.map(photo=>{
        return(
            <img style={mapHead}src={photo.photoname}/>
        );
    });

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className="container" margin="0 auto">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"><img src="https://img.icons8.com/windows/32/000000/retweet.png" width="30" height="30" className="d-inline-block align-top" alt=""/>Twee_dr</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href={urlHome}>Home</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search"/>
                            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="text-right">
                        <a class="nav-item nav-link" href="/twee_dr/logout">Logout</a>
                    </div>
                </nav>
                <div class="card mb-3">
                    <img height="200px"src="https://cdn.pixabay.com/photo/2018/07/28/22/12/sky-3569072_960_720.jpg" class="card-img-top"/>
                    <div class="card mb-3" margin="0 auto" max-width="540px">
                        <div class="row no-gutters">
                            <div class="col-4 text-center" >
                                <img className="card-img" style = {imageStyle} src={this.props.user.photo} />
                            </div>
                            <div class="col-8">
                                <div style={cardHeader}className = "cardHead">
                                    <h3 style={cardHeaderStyle}>{this.props.user.profilename}</h3>
                                </div>
                                <div class="card-body">
                                    <div className="profileText">
                                        <p class="card-text">Job: {this.props.userWork.work}</p>
                                        <p class="card-text">Company: {this.props.userWork.workcompany}</p>
                                        <p class="card-text">School: {this.props.userSchool.school}</p>
                                        <p className="card-text">Major: {this.props.userSchool.education}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header"><h5>Photo</h5></div>
                                <div className="card-body">
                                    <p>{mapAllPhoto}</p>
                                    <a href="/postphoto" className="btn btn-sm">Add photo</a>
                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="card-header"><h5>Friends</h5></div>
                                <div className="card-body">
                                    <p>Add some friends</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <h5 className="card-header">News feed</h5>
                                <p>{mapAllTweets}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = profilePage;