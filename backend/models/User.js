const connection = require('../connection')

class User {
    static insert(firstname, lastname, email, password, callback){
        connection.execute(`INSERT INTO Users (firstname, lastname, email, password) values (?, ?, ?, ?);`,
        [firstname, lastname, email, password], callback)
    };
    static findOne (req, callback){
        connection.execute(`SELECT * FROM Users WHERE email = ?`,[req.body.email], callback)
    };
}
module.exports = User;