const db = require('../db.js');

module.exports = class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}