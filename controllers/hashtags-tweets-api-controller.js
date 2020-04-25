const db = require('../db.js');

module.exports.getAllHashtags = async (req, res) => {
    const query = `SELECT * FROM hashtags`;
    const { rows } = await db.query(query);

    console.log('Get All Hashtags');
    res.json(rows);

}

module.exports.getAllHashtagsOfTweet = async (req, res) => {
    const query = `SELECT * FROM tweets WHERE id=${req.params.tweetId}`;
    const { rows } = await db.query(query);

    const query2 = `SELECT * from hashtags INNER JOIN hashtags_tweets ON hashtags.id = hashtags_tweets.hashtag_id`;

    const resultTwo = await db.query(query2);

    const listOfHashtags = resultTwo.rows.filter(row => {
        return row['tweet_id'] == req.params.tweetId
    })
    console.log(`List of Hashtags\n` + listOfHashtags);

    res.json(listOfHashtags);
}

module.exports.postAddHashtagToTweet = async (req, res) => {
    const query1 = `SELECT id from hashtags WHERE id='${req.params.hashtagId}'`;

    const resultOne = await db.query(query1);

    const query2 = `SELECT id from tweets WHERE id='${req.params.tweetId}'`;

    const resultTwo = await db.query(query2);

    const query3 = `INSERT INTO hashtags_tweets (tweet_id, hashtag_id) VALUES (${resultTwo.rows[0].id}, ${resultOne.rows[0].id}) RETURNING *`;

    const resultThree = await db.query(query3);

    res.json(resultThree);

}

module.exports.deleteHashtagOfTweet = async (req, res) => {

    const query1 = `SELECT id from hashtags WHERE name='${req.params.hashtagId}'`;

    const resultOne = await db.query(query1);

    const query2 = `SELECT id from tweets WHERE content='${req.params.tweetId}'`;

    const resultTwo = await db.query(query2);

    const query3 = `DELETE FROM hashtags_tweets WHERE tweet_id = ${resultTwo.rows[0]} AND hashtag_id = ${resultOne.rows[0]} RETURNING *`;

    const resultThree = await db.query(query3);

    console.log(resultThree.rows);
    console.log('Delete Hashtag Of Tweet');

}