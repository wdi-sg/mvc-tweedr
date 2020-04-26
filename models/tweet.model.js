const Model = require('./model')

class Tweet extends Model {

  constructor (id, title, content, user_id, likes) {
    super(id)
    this.data.title = title;
    this.data.content = content;
    this.data.user_id = user_id;
    this.data.likes = likes
  }


  get title () {
    return this.data.title;
  }

  set title(title) {
    this.data.title = title;
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


  get likes () {
    return this.data.likes
  }

  set likes(likes) {
    this.data.likes = likes
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