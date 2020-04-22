// model module
// contains db queries and returns data to controller
module.exports = (dbPoolInstance) => {

  const getAll = async () => {
    let query = 'SELECT tweets.id, content, username ' +
        'FROM tweets ' +
        'INNER JOIN users ' +
        'ON (tweets.user_id = users.id)';
    return await dbPoolInstance.query(query);
  };

  const getOne = async (id) => {
    let query =
        'SELECT tweets.id, content, username ' +
        'FROM tweets ' +
        'INNER JOIN users ' +
        'ON (tweets.user_id = users.id) ' +
        'WHERE tweets.id = $1';
    let values = [id];
    return await dbPoolInstance.query(query, values);
  };

  return {
    getAll,
    getOne
  };
};
