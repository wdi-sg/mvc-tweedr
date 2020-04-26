const db = require('../db.js');

module.exports.postAddTweetToUserFavourites = async (req, res) => {

    console.log('Post Add Tweet!');

    const query = `INSERT INTO favourites (user_id, tweet_id) VALUES (${req.session.userId}, ${req.params.tweetId}) RETURNING *`;

    const { rows } = await db.query(query);

    res.json(rows);

    console.log(rows);
}

module.exports.deleteTweetFromUserFavourites = async (req, res) => {

    const query = `DELETE FROM favourites WHERE tweet_id=${req.params.tweetId} AND user_id=${req.session.userId} RETURNING *`;

    const { rows } = await db.query(query);

    console.log(rows);

}