var React = require("react");


 class allTweets extends React.Component {
     render() {

       const allTweets = this.props.tweets.map( (tweet) => {
         return <li>{tweet.name} - {tweet.tweet}</li>
       })

         return (
           <html>
             <h3>TWEEDR:</h3>

             <ul>
               {allTweets}
             </ul>
           </html>
                 )
   }
 }

 module.exports = allTweets;