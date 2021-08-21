const connection = require('../connection')

class Comment {
    static insert(req, callback) {
        connection.execute(`INSERT INTO Comments (post_id, user_id, content, published_date) values (?, ?, ?, now());`,
            [req.body.post_id, req.body.user_id, req.body.content], callback)
    };

    static delete(req, callback) {
        connection.execute(`DELETE FROM Comments WHERE id = ?`, [req.body.id], callback)
    };

    static getAllForPost(req, callback) {
        connection.execute(`SELECT * FROM Comments WHERE post_id = ?`, [req.body.post_id], callback)
    };

}
module.exports = Comment;