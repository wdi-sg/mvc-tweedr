const db = require('../db.js');

// module.exports.getAllHashtags = async (req, res) => {
//     const query = `SELECT * FROM hashtags`;
//     const { rows } = await db.query(query);

//     console.log('Get All Hashtags');
//     res.json(rows);

// }

// module.exports.getAllHashtagsOfTweet = async (req, res) => {
//     const query = `SELECT * FROM tweets WHERE id=${req.params.tweetId}`;
//     const { rows } = await db.query(query);

//     const query2 = `SELECT * from hashtags INNER JOIN hashtags_tweets ON hashtags.id = hashtags_tweets.hashtag_id`;

//     const resultTwo = await db.query(query2);

//     const listOfHashtags = resultTwo.rows.filter(row => {
//         return row['tweet_id'] == req.params.tweetId
//     })
//     console.log(`List of Hashtags\n` + listOfHashtags);

//     res.json(listOfHashtags);
// }

module.exports.postAddTweetToUserFavourites = async (req, res) => {

    console.log('Post Add Tweet!');

    const query = `INSERT INTO favourites (user_id, tweet_id) VALUES (${req.session.userId}, ${req.params.tweetId}) RETURNING *`;

    const { rows } = await db.query(query);

    res.json(rows);

    console.log(rows);
}

module.exports.deleteTweetFromUserFavourites = async (req, res) => {

    // const query1 = `SELECT id from hashtags WHERE id='${req.params.hashtagId}'`;

    // const resultOne = await db.query(query1);

    // const query2 = `SELECT id from tweets WHERE id='${req.params.tweetId}'`;

    // const resultTwo = await db.query(query2);

    // const query = `DELETE FROM hashtags_tweets WHERE tweet_id = ${req.params.tweetId} AND hashtag_id = ${resultOne.rows[0]} RETURNING *`;

    const query = `DELETE FROM favourites WHERE tweet_id=${req.params.tweetId} AND user_id=${req.session.userId} RETURNING *`;

    const { rows } = await db.query(query);

    console.log(rows);

}