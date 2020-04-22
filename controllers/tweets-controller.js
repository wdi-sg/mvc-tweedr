const db = require('../db.js');

module.exports.getTweet = async (req, res) => {

    const query = `SELECT * FROM tweets WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    return rows;

    res.send('Get Tweet');
}

module.exports.getAllTweets = async (req, res) => {

    const query = `SELECT * FROM tweets`;
    const { rows } = await db.query(query);

    return rows;

    res.send('Get All Tweets');
}

module.exports.postAddTweet = async (req, res) => {

    const query = `INSERT INTO tweets (content, img_link) VALUES('${req.body.content}', '${req.body.img}') RETURNING *`;

    const { rows } = await db.query(queryT, queryV);

    return rows;

    res.send('Post Add Tweet');
}

module.exports.deleteTweet = async (req, res) => {
    const query = `DELETE from tweets WHERE id=${req.body.id}`;
    const { rows } = await db.query(query);

    return rows;
    res.send('Delete Tweet');
}