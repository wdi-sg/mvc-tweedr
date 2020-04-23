const Model = require('./model')

class User extends Model {

  constructor (id, user_name, password, profile_pic_url) {
    super(id)
    this.data.user_name = user_name
    this.data.password = password
    this.data.profile_pic_url = profile_pic_url
  }

  get password () {
    return this.data.password
  }

  set password (password) {
    this.data.password = password
  }

  get user_name () {
    return this.data.user_name
  }

  set user_name (user_name) {
    this.data.user_name = user_name
  }

  get profile_pic_url () {
    return this.data.profile_pic_url
  }

  set profile_pic_url (profile_pic_url) {
    this.data.profile_pic_url = profile_pic_url
  }

}

module.exports = User