const Tweet = require('../models/tweet.model');

const getAllTweets = async (req, res) => {
  try {
    const execRes = await Tweet.getTweetsWithUsers()
    const rowCount = execRes.rowCount;
    if (!rowCount) res.json("There is no tweets yet!")
    return res.json(execRes.rows);
  }catch (e) {console.error(e)}
}


module.exports = {
  getAllTweets
}

