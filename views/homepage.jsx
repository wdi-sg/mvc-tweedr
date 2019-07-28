var React = require("react");

class homePage extends React.Component {
  render() {
    var profileCardStyle = {
        margin:'10px',
        width:'18rem'
    }
    var cardPostStyle ={
        margin:'10px 0'
    }
    var imageStyle = {
        height:'130px',
        width:'130px',
        margin: '10px auto',
        borderRadius :'100%'
    }

    var feed = {
        maxWidth:'100%',
        margin:'10px 0'
    }

    var cardHeader = {
        width:'50px',
        height:'50px',
        borderRadius:'100%'
    }
    var urlProfile = '/twee_dr/profile/'+this.props.id;
    var urlHomepage = '/twee_dr/homepage/'+this.props.id+'/post';
    var mapAllTweets = this.props.allTweets.map(tweets=>{
        return(
            <div class="card" style={feed}>
                <div class="card-header">
                    <img style={cardHeader}src={tweets.photo}/>
                    {tweets.profilename}
                </div>
                <div class="card-body">
                    <p class="card-text">{tweets.tweet}</p>
                    <div className="text-right">
                        <a class="btn-sm" href="/twee_dr/editpost">Editpost</a>
                        <a class="btn-sm" href="/twee_dr/deletepost">Delete post</a>
                    </div>
                </div>
            </div>
        );
    });


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <body>
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand"><img src="https://img.icons8.com/windows/32/000000/retweet.png" width="30" height="30" className="d-inline-block align-top" alt=""/>Twee_dr</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search"/>
                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style= {profileCardStyle}>
                                <div className="card-body">
                                    <img style={imageStyle} src={this.props.resultUser.photo}/>
                                    <h5 className="card-title">{this.props.resultUser.profilename}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href= {urlProfile}className="btn btn-danger">Profile</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="card" style ={cardPostStyle}>
                            <h5 className="card-header">Create post</h5>
                            <div className="card-body">
                                <h5 className="card-title">What is in your mind?</h5>
                                <form method="POST" action={urlHomepage}>
                                    <div className="form-group">
                                        <textarea type="text" name="tweet" className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header">News feed</h5>
                            <p>{mapAllTweets}</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = homePage;