var React = require("react");
 class newHashtags extends React.Component {
     render() {
         return (
            <html>
                <title>Create New Hashtag</title>
                <h3>Create New Hashtag</h3>
                <form action="/create" method="POST">
                    <div>
                        <p>Name</p>
                        <p><input type = "text" name = "hashword"/></p>
                    </div>


                     <input type='submit' value='Submit'/>
                 </form>
            </html>
                 )
   }
 }

 module.exports = newHashtags;