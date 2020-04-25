module.exports = (pool) => {
  let writeNewHashtag = (tag, cb) => {
    let queryText = `insert into hashtags(tag) values ('${tag}') returning *`;
    console.log(queryText);
    pool.query(queryText, cb);
  };

  let viewAllHashtags = (cb) => {
    let queryText = "select * from hashtags";
    pool.query(queryText, cb);
  }
 
  return {
    writeNewHashtag: writeNewHashtag,
    viewAllHashtags: viewAllHashtags
    
  };
};
