const db = require('../db.js');

module.exports.getTweet = async (req, res) => {

    const query = `SELECT * FROM tweets WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    res.render('./tweets/tweets-single', { singleTweet: rows[0] });;
}

module.exports.getAllTweets = async (req, res) => {

    const query = `SELECT * FROM tweets`;
    const { rows } = await db.query(query);

    res.render('./tweets/tweets-all', { allTweets: rows });
}

module.exports.getAddTweetForm = async (req, res) => {

    res.render('./tweets/create-tweet', { invalidMsg: req.session.invalidMsg });
}

module.exports.getEditTweetForm = async (req, res) => {

    const query = `SELECT * FROM tweets WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    res.render('./tweets/edit-tweet', { singleTweet: rows[0] });

}

module.exports.postAddTweet = async (req, res) => {

    if (!req.body.content) {

        req.session.invalidMsg = "Tweed is empty!";

        console.log(req.session.invalidMsg);

        res.redirect('/tweets/new');

    } else {

        const query = `INSERT INTO tweets (content, img_link, user_id) VALUES('${req.body.content}', '${req.body.img}', '${req.session.userId}') RETURNING *`;

        const { rows } = await db.query(query);

        console.log(rows);

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