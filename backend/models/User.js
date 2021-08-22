const connection = require('../connection')

class User {
    static insert(firstname, lastname, email, password, callback){
        connection.execute(`INSERT INTO Users (firstname, lastname, email, password) values (?, ?, ?, ?);`,
        [firstname, lastname, email, password], callback)
    };
    static findOne (email,callback){
        connection.execute(`SELECT * FROM Users WHERE email = ?`,[email], callback)
    };

    static delete (req, callback){
        connection.execute(`DELETE FROM Users WHERE id = ?`,[req.body.id], callback)
    };

    static modify (req, callback){
        connection.execute(`UPDATE Users
        SET firstname = ?, lastname = ?
        WHERE id = ?`,[req.body.firstname, req.body.lastname, req.body.id], callback)
    };

    static getOne (req, callback){
        connection.execute(`SELECT * FROM USers WHERE id = ?`, [req.body.id], callback)
    };
}
module.exports = User;