/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  let addHashtag = (tag) => {
    let queryString = 'insert into hashtags (tags) values ($1) returning *';

    const values = [tag];

    return dbPoolInstance.query(queryString, values);
  }

  return {
    addHashtag
  };
};