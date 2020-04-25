const common = require("./common");

module.exports = (db) => {
  let displayNewHashtagForm = (request, response) => {
    response.render("./hashtags/new-hashtag");
  };

  let displayAllHashtags = (request, response) => {
    let cbViewAllHashtags = (err, result) => {
      console.log(result.rows);
      let obj = {
        htArr: result.rows
      };
      response.render("./hashtags/display-all-hashtags", obj);
    }
    db.hashtags.viewAllHashtags(cbViewAllHashtags);
  }

  let submitNewHashtag = (request, response) => {
    // console.log(request.body);
    let tag = request.body.tag;
    let cbWriteNewHashtag = (err, result) => {
      console.log(result.rows);
      response.redirect("/hashtags");
    }
    db.hashtags.writeNewHashtag(tag, cbWriteNewHashtag);
  };

  return {
    displayNewHashtagForm: displayNewHashtagForm,
    submitNewHashtag: submitNewHashtag,
    displayAllHashtags: displayAllHashtags,
  };
};
