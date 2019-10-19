var React = require("react");
var Layout = require('./layout')

class Profile extends React.Component {
  render() {



    const tweets = this.props.tweets.map((tweet,i)=>{
         let time = tweet.created_at.toString()
        return      <div className="col-6">

                        <div key = {i} className="card">
                            <div className="card-body">

                                <h5 className="card-text"> {tweet.tweet} </h5>

                                    <div className="card-subtitle mb-2 text-muted">

                                        <div className="card-subtitle mb-2 text-muted">tweeted at {time}</div>

                                    </div>
                                        <a href="#" class="card-link">Edit</a>
                                        <a href="#" class="card-link">Delete</a>
                            </div>
                        </div>
                    </div>

    })


    return (
      <Layout>
        <h1> Tweedr profile of: {this.props.name} </h1>
        <br/>
        <h2> Tweeds by {this.props.name}:</h2>

        <div className="row">
            {tweets}
        </div>



     </Layout>
    );
  }
}

module.exports = Profile;