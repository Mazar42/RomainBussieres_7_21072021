const connection = require('../connection')

class Post {
    static insert(req, callback){
        connection.execute(`INSERT INTO Posts (user_id, title, image_url, content, published_date) values (?, ?, ?, ?, now());`,
        [req.body.user_id, req.body.title, req.body.image_url, req.body.content], callback)
    };

    static update( req, callback){
        connection.execute(`UPDATE Posts
                            SET title = ?, content = ?
                            WHERE id = ?`,[req.body.title, req.body.content, req.body.id], callback)
    };

    static delete(req, callback){
        connection.execute(`DELETE FROM Posts WHERE id = ?`,[req.body.id], callback)
    };

    static getAll(callback){
        connection.execute(`SELECT * FROM Posts`, callback)
    };
}
module.exports = Post;