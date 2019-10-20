var React = require("react");
var Layout = require('./layout')

class Index extends React.Component {
  render() {
          const tweet = this.props.tweets.map((tweet,i)=>{

            let time = tweet.created_at.toString();

            return   <div className="col-6">

                        <div key = {i} className="card">
                            <div className="card-body">

                                <h5 className="card-text"> {tweet.tweet} </h5>

                                    <div className="card-subtitle mb-2 text-muted">
                                        <div> tweeted by
                                            <a className="card-link" href={"http://localhost:3000/profiles/" + tweet.id}> {tweet.username} </a>
                                        </div>

                                        <div className="card-subtitle mb-2 text-muted">tweeted at {time}</div>

                                    </div>

                            </div>
                        </div>
                    </div>



    });
    return (
       <Layout>
        <h1> ALL TWEEDS ON TWEEDR </h1>
            <div className="row">
              {tweet}
            </div>
            <br/>


              <h1>MAKE YOURSELF HEARD</h1>
                <h2>Tweed something intelligent.</h2>

                <form method="POST" action="/tweed">
                    <div className="form-group">

                        <input className="form-control form-control-lg" type="text" placeholder="your tweed" name="tweed" maxLength = "30" required/>
                    </div>

                    <input type="submit" className="btn btn-primary" value="tweed"/>
                </form>

        </Layout>
    );
  }
}

module.exports = Index;