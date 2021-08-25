const connection = require('../connection')
const getUserId = require('../helpers');

class Post {
    static insert(req, callback) {
        const userId = getUserId(req);
        const imageUrl = `${req.protocol}://${req.get('host')}/media/${req.file.filename}`
        connection.execute(`INSERT INTO Posts (user_id, title, image_url, content, published_date) values (?, ?, ?, ?, now());`, [userId, req.body.title, imageUrl, req.body.content], callback)
    };

    static update(req, callback) {
        connection.execute(`UPDATE Posts
                            SET title = ?, image_url = ?, content = ?
                            WHERE id = ?`, [req.body.title, req.body.image_url, req.body.content, req.body.id], callback)
    };

    static delete(req, callback) {
        const userId = getUserId(req);
        connection.execute(`SELECT posts.id as post_id, posts.content, users.id as user_id, users.is_admin FROM posts 
        INNER JOIN users 
        WHERE posts.id = ? AND users.id = ?`, [req.params.id, userId], (error, results) => {
            const post = results[0];
            // On vérifie si l'utilisateur est soit l'auteur du post soit un admin
            if (post.is_admin === 1 || post.user_id === userId) {
                // il peut supprimer
                connection.execute(`DELETE FROM Posts WHERE id = ?`, [req.params.id], callback)
            }
        })
    };

    static getAll(callback) {
        connection.execute(`SELECT Posts.title, Posts.image_url, Posts.content, Posts.published_date, Posts.id, Users.firstname, Users.lastname, Users.email FROM Posts INNER JOIN Users where Posts.user_id = Users.id`, callback)
    };
}
module.exports = Post;