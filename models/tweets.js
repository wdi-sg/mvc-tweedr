// model module
// contains db queries and returns data to controller
const dbPool = require('../db.js');

module.exports = class Tweet {
  constructor(content, user_id) {
    this.content = content;
    this.user_id = user_id;
  }

  static async getAll () {
    let tweetQuery = 'SELECT tweets.id, content, username ' +
        'FROM tweets ' +
        'INNER JOIN users ' +
        'ON (tweets.user_id = users.id)';
    return await dbPool.query(tweetQuery);
  }

  static async getOne (id) {
    let tweetQuery =
        'SELECT tweets.id, content, username ' +
        'FROM tweets ' +
        'INNER JOIN users ' +
        'ON (tweets.user_id = users.id) ' +
        'WHERE tweets.id = $1';
    let values = [id];
    return await dbPool.query(tweetQuery, values);
  };
};
