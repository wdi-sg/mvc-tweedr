const db = require('../db.js');

module.exports.getTweet = async (req, res) => {

    const query = `SELECT * FROM tweets WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    res.render('./tweets/tweets-single', { singleTweet: rows[0] });;
}

module.exports.getAllTweets = async (req, res) => {

    const query = `SELECT * FROM tweets`;
    const { rows } = await db.query(query);

    const query2 = `SELECT * from hashtags INNER JOIN hashtags_tweets ON hashtags.id = hashtags_tweets.hashtag_id`;

    const resultTwo = await db.query(query2);
    console.log(resultTwo.rows);

    res.render('./tweets/tweets-all', {
        allTweets: rows,
        allHashtags: resultTwo.rows
    });
}

module.exports.getAddTweetForm = async (req, res) => {

    const query = `SELECT * FROM hashtags`;
    const { rows } = await db.query(query);
    console.log(rows);

    res.render('./tweets/create-tweet', {
        invalidMsg: req.session.invalidMsg,
        allHashtags: rows
    });
}

module.exports.getEditTweetForm = async (req, res) => {

    const query = `SELECT * FROM tweets WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    const query2 = `SELECT * from hashtags INNER JOIN hashtags_tweets ON hashtags.id = hashtags_tweets.hashtag_id`;

    const resultTwo = await db.query(query2);

    const listOfHashtags = resultTwo.rows.filter(row => {
        return (row['tweet_id'] == req.params.id);
    });

    console.log(listOfHashtags);

    const query3 = `SELECT * FROM hashtags`;
    const resultThree = await db.query(query3);


    res.render('./tweets/edit-tweet', {
        singleTweet: rows[0],
        allHashtags: resultThree.rows,
        hashtags: listOfHashtags
    });

}

module.exports.postAddTweet = async (req, res) => {

    if (!req.body.content) {

        req.session.invalidMsg = "Tweed is empty!";

        console.log(req.session.invalidMsg);

        res.redirect('/tweets/new');

    } else {

        console.log(req.body);

        const query = `INSERT INTO tweets (content, img_link, user_id) VALUES('${req.body.content}', '${req.body.img}', '${req.session.userId}') RETURNING *`;

        const { rows } = await db.query(query);

        const hashtagIds = await Promise.all(req.body.hashtag.map(async hash => {
            const query2 = `SELECT id from hashtags WHERE name='${hash}'`;
            console.log(hash);

            const resultTwo = await db.query(query2);
            return resultTwo.rows[0].id;
        }));

        console.log(hashtagIds);

        const query3 = `SELECT id from tweets WHERE content='${req.body.content}'`;

        const resultThree = await db.query(query3);

        for (const hashtagId of hashtagIds) {
            const query2 = `SELECT id from hashtags WHERE id='${hashtagId}'`;

            const resultTwo = await db.query(query2);

            const query4 = `INSERT INTO hashtags_tweets (tweet_id, hashtag_id) VALUES (${resultThree.rows[0].id}, ${resultTwo.rows[0].id}) RETURNING *`

            const resultFour = await db.query(query4);
            console.log(resultFour.rows)
        }

        res.redirect(`/tweets/${rows[0].id}`);
    }

}

module.exports.putEditTweet = async (req, res) => {

    if (!req.body.content) {

        req.session.invalidMsg = "Tweed is empty!";

        console.log(req.session.invalidMsg);

        res.redirect(`/tweets/${req.params.id}`);

    } else {

        const query = `UPDATE tweets SET content='${req.body.content}', img_link='${req.body.img}' WHERE id=${req.params.id} RETURNING *`;

        const { rows } = await db.query(query);

        console.log(rows);

        res.redirect(`/tweets/${rows[0].id}`);
    }
}

module.exports.deleteTweet = async (req, res) => {
    const query = `DELETE from tweets WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);
    res.redirect('/tweets');
}