const connection = require('../connection')
const jwt = require('jsonwebtoken');
const getUserId = require('../helpers');
require('dotenv').config()

class User {
    static insert(firstname, lastname, email, password, callback) {
        connection.execute(`INSERT INTO Users (firstname, lastname, email, password) values (?, ?, ?, ?);`, [firstname, lastname, email, password], callback)
    };
    static findOne(email, callback) {
        connection.execute(`SELECT * FROM Users WHERE email = ?`, [email], callback)
    };

    static delete(req, callback) {
        connection.execute(`DELETE FROM Users WHERE id = ?`, [req.body.id], callback)
    };

    static modify(req, callback) {
        const userId = getUserId(req);
        connection.execute(`UPDATE Users SET firstname = ?, lastname = ? WHERE id = ?`, [req.body.firstname, req.body.lastname, userId], callback)
    };

    static getOne(req, callback) {
        const userId = getUserId(req);
        connection.execute(`SELECT * FROM USers WHERE id = ?`, [userId], callback)
    };
}
module.exports = User;