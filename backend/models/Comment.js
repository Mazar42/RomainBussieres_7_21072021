const connection = require('../connection')

class Comment {
    static insert(post_id, user_id, content, callback) {
        connection.execute(`INSERT INTO Comments (post_id, user_id, content, published_date) values (?, ?, ?, now());`,
            [post_id, user_id, content], callback)
    };

    static delete(comment_id, callback) {
        connection.execute(`DELETE FROM Comments WHERE comment_id = ?`, [comment_id], callback)
    };

    static getAll(callback) {
        connection.execute(`SELECT * FROM Comments`, callback)
    };

    static findOne(comment_id, callback) {
        connection.execute(`SELECT * FROM Comments WHERE comment_id = ?`, [comment_id], callback)
    };
}
module.exports = Comment;