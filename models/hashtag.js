/**
* ===========================================
* Export model functions as a module
* ===========================================
*/
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope
    let getAll = (callback) => {
        let query = 'SELECT * FROM hashtags';

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let newHashtag = (content, callback) => {
        content = '#' + content;
        let query = 'INSERT INTO hashtags (content) VALUES ($1)';

        dbPoolInstance.query(query, [content], (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, queryResult);
            }
        });
    };

    return {
        getAll: getAll,
        newHashtag: newHashtag
    };
};