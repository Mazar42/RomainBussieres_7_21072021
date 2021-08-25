const connection = require('../connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const getUserId = require('../helpers');

class Comment {
    static insert(req, callback) {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN);
        const userId = decodedToken.userId;

        connection.execute(`INSERT INTO Comments (post_id, user_id, content, published_date) values (?, ?, ?, now());`, [req.body.post_id, userId, req.body.content], callback)
    };

    static delete(req, callback) {
        const userId = getUserId(req);
        connection.execute(`SELECT comments.id as comment_id, comments.content, users.id as user_id, users.is_admin FROM comments 
        INNER JOIN users 
        WHERE comments.id = ? AND users.id = ?`, [req.params.id, userId], (error, results) => {
            const comment = results[0];
            // On vérifie si l'utilisateur est soit l'auteur du commentaire soit un admin
            if (comment.is_admin === 1 || comment.user_id === userId) {
                // il peut supprimer
                connection.execute(`DELETE FROM Comments WHERE id = ?`, [req.params.id], callback)
            }
        });
    };

    static getAllForPost(req, callback) {
        connection.execute(`SELECT comments.content, comments.id, comments.published_date, comments.user_id, users.firstname, users.is_admin, users.lastname, users.email FROM comments 
        INNER JOIN users 
        WHERE post_id = ? AND comments.user_id = users.id`, [req.params.id], callback)
    };

}
module.exports = Comment;