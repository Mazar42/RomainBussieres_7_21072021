const connection = require('../connection')

class User {
    static insert(pseudo, first_name, last_name, email, password, callback){
        connection.execute(`INSERT INTO Users (first_name, last_name, email, password, is_admin) values (?, ?, ?, ?, ?);`,
        [pseudo,first_name, last_name, email, password], callback)
    };
    static findOne (email,callback){
        connection.execute(`SELECT * FROM Users WHERE email = ?`,[email], callback)
    };
}
module.exports = User;