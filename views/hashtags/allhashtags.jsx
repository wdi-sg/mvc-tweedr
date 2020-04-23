var React = require("react");


 class allHashtags extends React.Component {
     render() {

       const allHashtags = this.props.hashtags.map( (hashtag) => {
         return <li>{hashtag.hashword}</li>
       })

         return (
           <html>
             <h3>TWEEDR:</h3>

             <ul>
               {allHashtags}
             </ul>
           </html>
                 )
   }
 }

 module.exports = allHashtags;