module.exports = (dbPoolInstance) => {
    
    let userHomepage = (user, callback) => {

        let query = `select users.username, tweets.tweet from tweets inner join users on tweets.users_id = users.id where users.username = '${user}'`

        dbPoolInstance.query(query, (queryErr, queryResult) => {
            if (queryErr) {
                console.log("-- Error in userHomeoage model", queryErr.message)
            } else {
                // console.log(queryResult)
                callback(null, queryResult)
            }
        })
    }

    return {
        userHomepage
    }
}