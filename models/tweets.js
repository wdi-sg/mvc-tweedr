// model module
// contains db queries and returns data to controller
module.exports = (dbPoolInstance) => {

  const getAll = async () => {
    let tweetQuery = 'SELECT tweets.id, content, username ' +
        'FROM tweets ' +
        'INNER JOIN users ' +
        'ON (tweets.user_id = users.id)';
    return await dbPoolInstance.query(tweetQuery);
  };

  const getOne = async (id) => {
    let tweetQuery =
        'SELECT tweets.id, content, username ' +
        'FROM tweets ' +
        'INNER JOIN users ' +
        'ON (tweets.user_id = users.id) ' +
        'WHERE tweets.id = $1';
    let values = [id];
    return await dbPoolInstance.query(tweetQuery, values);
  };

  return {
    getAll,
    getOne
  };
};
