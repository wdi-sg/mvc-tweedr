var React = require('react');
 class newFavorites extends React.Component {
     render() {
        console.log("script")
         return (
            <html>
            <body>

                <h3>Add New Favorite</h3>
                <form action="/favorite" method="POST">
                <div>
                    <p>
                        User Id <input id ="input" name="user_id" type="text"/>
                    </p>
                    <p>
                        Tweet Id <input id ="input_tweet" name="tweet_id" type="text"/>
                    </p>

                    <p>

                        <input type='submit' value='Submit'/>
                    </p>
                </div>
                </form>

            </body>
        </html>
        );
    }
}

 module.exports = newFavorites;