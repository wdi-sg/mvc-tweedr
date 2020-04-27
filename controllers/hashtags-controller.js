const db = require('../db.js');

module.exports.getAddHashtagForm = async (req, res) => {

    res.render('./hashtags/add-hashtag', { invalidMsg: req.session.invalidMsg });
}

module.exports.getEditHashtagForm = async (req, res) => {

    const query = `SELECT * FROM hashtags WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    res.render('./hashtags/edit-hashtag', { singleHashtag: rows[0] });

}
module.exports.getHashtag = async (req, res) => {

    const query = `SELECT * FROM hashtags WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);

    res.render('./hashtags/hashtags-single', { singleHashtag: rows[0] });;

}
module.exports.getAllHashtags = async (req, res) => {

    const query = `SELECT * FROM hashtags`;
    const { rows } = await db.query(query);

    res.render('./hashtags/hashtags-all', { allHashtags: rows });

}
module.exports.postAddHashtag = async (req, res) => {

    if (!req.body.name) {

        req.session.invalidMsg = "Hashtag is empty!";

        console.log(req.session.invalidMsg);

        res.redirect('/hashtags/new');

    } else {

        const query = `INSERT INTO hashtags (name) VALUES('${req.body.name}') RETURNING *`;

        const { rows } = await db.query(query);

        console.log(rows);

        res.redirect(`/hashtags/${rows[0].id}`);
    }

}

module.exports.putEditHashtag = async (req, res) => {

    if (!req.body.name) {

        req.session.invalidMsg = "Hashtag is empty!";

        console.log(req.session.invalidMsg);

        res.redirect(`/hashtags/${req.params.id}`);

    } else {

        const query = `UPDATE hashtags SET name='${req.body.name}' WHERE id=${req.params.id} RETURNING *`;

        const { rows } = await db.query(query);

        console.log(rows);

        res.redirect(`/hashtags/${rows[0].id}`);
    }
}

module.exports.deleteHashtag = async (req, res) => {

    const query = `DELETE from hashtags WHERE id=${req.params.id}`;
    const { rows } = await db.query(query);
    res.redirect('/hashtags');

}