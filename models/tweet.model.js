const Model = require('./model')

class Tweet extends Model {

  constructor (id, content, like_count, media_url, created_at ,user_id) {
    super(id)
    this.data.content = content;
    this.data.user_id = user_id;
    this.data.like_count = like_count;
    this.data.created_at = created_at;
    this.data.media_url = media_url;

  }

  get content () {
    return this.data.content;
  }

  set content(content) {
    this.data.content = content
  }

  get user_id() {
    return this.data.user_id;
  }

  set user_id (user_id) {
    this.data.user_id = user_id;
  }

  get like_count() {
    return this.data.like_count;
  }

  set like_count (like_count) {
    this.data.like_count = like_count
  }

  get media_url() {
    return this.data.media_url;
  }

  set media_url (media_url) {
    this.data.media_url = media_url
  }

  get created_at() {
    return this.data.created_at;
  }

  set created_at (created_at) {
   this.data.created_at = created_at
  }



  // this is ugly but i don't have much time
  // todo: make a query builder
  static async getTweetsWithUsers() {
    const statement = "select tweet.*, \"user\".user_name, " +
      "\"user\".profile_pic_url from tweet join \"user\" " +
      "on tweet.user_id = \"user\".id"
    return this.execute(statement)
  }
}




module.exports = Tweet