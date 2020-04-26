var React = require('react');
 class newFavorites extends React.Component {
     render() {
        console.log("script")
         return (
            <html>
            <body>

                <h3>Add New Favorite</h3>

                <div>
                    <p>
                        User Id <input type="text"  id="user_id" name="user_id"></input>

                    </p>
                    <p>
                        Tweet Id <input type="text" id="tweet_id" name="tweet_id"></input>
                    </p>

                    <p>

                        <button id="button">Add Favorite</button>
                    </p>
                </div>
                <script src="../script.js"></script>

            </body>
        </html>
        );
    }
}

 module.exports = newFavorites;