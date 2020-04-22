/* Interface
    connect()
 */
require('dotenv').config()
const pg = require('pg');

class PgConnection {

  constructor (config) {
    this.config = config;
    this.pool = new Pool()
  }

  // @returns client
  connect() {
    return this.pool.connect()
  }

}

module.exports = PgConnection