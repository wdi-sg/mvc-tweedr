const sha256 = require("js-sha256");

module.exports = (pool) => {

  let checkUsernameDuplicate = (name, cb) => {
    let queryText = `select * from users where username = '${name}'`;
    pool.query(queryText, cb);
  }

  let checkDpUrl = (url) => {
    const regex = new RegExp("https://");
    const isLinkOk = regex.test(url);
    return isLinkOk;
  }

  let writeNewUser = (obj, cb) => {
    let username = obj.username;
    let pw = sha256(obj.password);
    let dp = obj.dp_url;
    let queryText = `insert into users (username, pw, dp) values ('${username}', '${pw}', '${dp}') returning *`;
    pool.query(queryText, cb);
  };

  return {
    writeNewUser: writeNewUser,
    checkUsernameDuplicate: checkUsernameDuplicate,
    checkDpUrl: checkDpUrl
  };
};
