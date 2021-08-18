const Post = require('../models/Post');
const fs = require ('fs');
const { post } = require('../routes/posts');
const connection = require('../connection');

// -- posts --  This is a work in progress - valid logics are commented : --ok--

// create new post  --ok--
// exports.createPost = (req, res, next) => {
//    Post.insert(req.body.user_id, req.body.title, req.body.image_url, req.body.content, req.body.published_date)
//     post.save()
//       .then(() => res.status(201).json({message: 'Post created'}))
//       .catch(error => res.status(400).json({error}));
//   };
exports.createPost = (req, res) => {
  connection.query('INSERT INTO `posts` SET `user_id`=?, title`=?,`image_url`=?,`content`=?, `published_date`=? where `id`=?', [req.body.user_id, req.body.title, req.body.image_url, req.body.content, req.body.published_date], (error, results) => {
    if (error) throw error;
    res.end('Post has been updated');
  });
};

//modify a post --ok--
exports.updatePost = (req, res) => {
  connection.query('UPDATE `posts` SET `title`=?,`image_url`=?,`content`=? where `id`=?', [req.body.title, req.body.image_url, req.body.content, req.body.id], (error, results) => {
   if (error) throw error;
   res.end('Post has been updated');
 });
};

// delete a post
exports.deletePost = (req, res) => {
  console.log(req.body);
  connection.query('DELETE FROM `posts` WHERE `id`=?', [req.body.id], (error, results) => {
   if (error) throw error;
   res.end('Post has been deleted!');
 });
}

//All posts --ok--
exports.getAllPosts = (req, res) => {
  console.log(req);
  connection.query('select * from posts', (error, results) => {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
};

//--Comments--

// find comments according to post --written for sql but not done--
exports.getCommentsForPost = (req, res) => {
  connection.query('select * from posts where id=?', [req.params.id], (error, results) => {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
}

exports.createComment = (req, res, next) => {
  const comment = new Comment({
    ...commentObject,
  });
  comment.save()
    .then(() => res.status(201).json({message: 'Comment saved'}))
    .catch(error => res.status(400).json({error}));
};

exports.deleteComment = (req, res, next) => {
  Comment.deleteOne({_id: req.params.id})
      .then(() => res.status(200).json({message: 'Comment deleted'}))
      .catch(error => res.status(400).json({error}));
    };