const connection = require('../connection')
const jwt = require('jsonwebtoken');
require('dotenv').config();

class Post {
    static insert(req, callback) {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;

        connection.execute(`INSERT INTO Posts (user_id, title, image_url, content, published_date) values (?, ?, ?, ?, now());`,
            [userId, req.body.title, req.body.image_url, req.body.content], callback)
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
        connection.execute(`SELECT * FROM Posts`, callback)
    };
}
module.exports = Post;