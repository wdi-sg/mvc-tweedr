module.exports = (dbPoolInstance) => {

    let getAll = (callback) => {
        dbPoolInstance
            .query('SELECT tweeds.tweed, users.username FROM tweeds INNER JOIN users ON tweeds.user_id = users.id;')
            .then(result => callback(null, result))
            .catch(err => callback(err, null))
        }

    let addTweed = (values, callback) => {
        dbPoolInstance.query('INSERT INTO tweeds (tweed, user_id) VALUES ($1, $2);', values, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                callback(null, null)
            }
        })
    }
    return {
        getAll,
        addTweed
    }
}