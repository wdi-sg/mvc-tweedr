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
                {tweets.username}
                <br/>

             {/*   {tweets.creation_date}*/}

                               
                </p>
                )

        })
        return (

          <Layout pageTitle={this.props.pageTitle}>

                <h1 className="text-center">All the Latest Tweedrs</h1>

                  { this.props.warning }
                        
                        {theTweets}
                        


          </Layout>
        )
    }
}


module.exports = AllTweets;
