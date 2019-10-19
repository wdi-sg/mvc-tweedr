const React = require("react");
const Layout = require('./layouts/default');

class AllTweets extends React.Component {
   render() {

        let style = {
            display: "inline-block",
            margin: "2rem",
            "text-align": "center"
        }
        let style2 = {
            "text-decoration": "none"
        }
        const theTweets = this.props.allTweets.map( (tweets, index) => {
            return (
                <li style={style}>{tweets.tweet}
                <br/>
                {tweets.user_id}
                <br/>
                {tweets.date}               </li>
                )

        })
        return (

          <Layout pageTitle={this.props.pageTitle}>



                  { this.props.warning }
                        <ul>
                        {theTweets}
                        </ul>


          </Layout>
        )
    }
}


module.exports = AllTweets;
