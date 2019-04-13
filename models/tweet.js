module.exports = function(dbPoolInstance) {

    let getAllTweets = async function() {
        try {
            let sqlQuery = 'SELECT * FROM tweets';
            let result = await dbPoolInstance.query(sqlQuery);

            return result.rows;

        } catch(e) {
            console.log('model ' + e);
        }
    };

    return {
        getAllTweets
    };
};