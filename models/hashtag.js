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

  let getHashtags = () => {
    let queryString = `select * from hashtags`

    return dbPoolInstance.query(queryString);
  }

  let linkHashtag = (hashtagID, tweetID) => {
    let queryString = 'insert into hashtags_tweets (hashtags_id, tweets_id) values ($1, $2) returning *'

    const values = [hashtagID, tweetID];

    return dbPoolInstance.query(queryString, values);
  }

  return {
    addHashtag,
    getHashtags,
    linkHashtag
  };
};