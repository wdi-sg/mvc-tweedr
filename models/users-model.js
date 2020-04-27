const db = require('../db.js');

module.exports = class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    static async getAll() {
        const query = `SELECT * FROM users`
        const { rows } = await db.query(query);

        return rows;
    }

    static async getByEmail(email) {
        const query = `SELECT * FROM users WHERE email ='${email}'`
        const { rows } = await db.query(query);

        return rows;
    }

    static async getById(id) {
        const query = `SELECT * FROM users WHERE id=${id}`;
        const { rows } = await db.query(query);

        return rows;
    }

    static async getVisitsById(id) {
        const query = `SELECT id, visits FROM users WHERE id=${id}`;
        const { rows } = await db.query(query);

        return rows;
    }

    static async updateVisits(userId, visits) {
        const query = `UPDATE users SET visits=${visits} WHERE id=${userId}`
        const { rows } = await db.query(query);

        return rows;

        const sessionUser = await User.getVisitsById(req.cookies['userId']);

        console.log(sessionUser);

    }

    static async register(user) {
        const queryT = `INSERT INTO users (email, password) VALUES($1, $2) RETURNING *`;
        const queryV = [user.email, user.password];
        const { rows } = await db.query(queryT, queryV);

        return rows;
    }
}