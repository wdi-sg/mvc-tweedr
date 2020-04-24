/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let registering = (user, callback) => {

        let query = 'INSERT INTO users(name, password, email) Values ($1, $2, $3) Returning *';
        let insertValues = [user.name, user.password, user.email];

        dbPoolInstance.query(query, insertValues, (error, queryResult) => {
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            console.log(queryResult);
            callback(error, queryResult);
        });
    };

    return {
        registering,
    };
};
