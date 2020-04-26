var React = require("react");

 class NewTweets extends React.Component {
   render() {
     return (
       <html>
         <head/>
             <title>Create a new Tweet</title>
         <body>
             <h1> Add a New Tweet!</h1>
             <form method="POST" action="/new">
                 <p>Tweet<input name = "tweet" type = "text"/>
                 </p>
                 <p>User Id<input name = "user_id" type = "number"/>
                 </p>
                 <input type="submit" value="Submit"/>
             </form>
         </body>
       </html>
     );
   }
 }

 module.exports = NewTweets;