const React = require("react");
const Layout = require('./layouts/default');

class AllTweets extends React.Component {
   render() {


        let style = {
            display: "block",
            margin: "2rem",
            "backgroundColor": "#ffffff",
            "textAlign": "center"
        }
        const theTweets = this.props.allTweets.map( (tweets, index) => {
             
            return (
                <p style={style}>{tweets.tweet}
                <br/>
                <a href={"/u/"+tweets.username} className="btn btn-sm btn-outline-info m-1">{tweets.username}</a>
                <br/>

             {/*   {tweets.creation_date}*/}

                               
                </p>
                )

        })
        return (

          <Layout pageTitle={this.props.pageTitle}>

                <h1 className="text-center">{this.props.pageTitle}</h1>

                  { this.props.warning }
                        
                        {theTweets}
                        


          </Layout>
        )
    }
}


module.exports = AllTweets;
