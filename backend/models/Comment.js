const connection = require('../connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class Comment {
    static insert(req, callback) {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;

        connection.execute(`INSERT INTO Comments (post_id, user_id, content, published_date) values (?, ?, ?, now());`, [req.body.post_id, userId, req.body.content], callback)
    };

    static delete(req, callback) {
        connection.execute(`DELETE FROM Comments WHERE id = ?`, [req.params.id], callback)
    };

    static getAllForPost(req, callback) {
        connection.execute(`SELECT Comments.content, Comments.id, Comments.published_date, Comments.user_id, Users.firstname, Users.lastname, Users.email FROM Comments 
        INNER JOIN Users 
        WHERE post_id = ? AND Comments.user_id = Users.id`, [req.params.id], callback)
    };

}
module.exports = Comment;