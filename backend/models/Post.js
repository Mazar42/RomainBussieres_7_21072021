const connection = require('../connection')
const getUserId = require('../helpers');

class Post {
    static insert(req, callback) {
        const userId = getUserId(req);
        connection.execute(`INSERT INTO Posts (user_id, title, image_url, content, published_date) values (?, ?, ?, ?, now());`, [userId, req.body.title, req.body.image_url, req.body.content], callback)
    };

    static update(req, callback) {
        connection.execute(`UPDATE Posts
                            SET title = ?, image_url = ?, content = ?
                            WHERE id = ?`, [req.body.title, req.body.image_url, req.body.content, req.body.id], callback)
    };

    static delete(req, callback) {
        connection.execute(`DELETE FROM Posts WHERE id = ?`, [req.params.id], callback)
    };

    static getAll(callback) {
        connection.execute(`SELECT Posts.title, Posts.image_url, Posts.content, Posts.published_date, Posts.id, Users.firstname, Users.lastname, Users.email FROM Posts INNER JOIN Users where Posts.user_id = Users.id`, callback)
    };
}
module.exports = Post;