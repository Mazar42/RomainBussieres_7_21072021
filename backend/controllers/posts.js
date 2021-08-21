const Post = require('../models/Post');
const Comment = require('../models/Comment');
const fs = require ('fs');
// const { post } = require('../routes/posts');
const connection = require('../connection');

// -- posts --  

// create new post 
exports.createPost = (req, res, next) => {
   Post.insert(req, (error, results) =>{
     if (error) { res.status(400).json({error}) }
     if (results) { res.status(201).json({message: 'Post created'}) }
   })
  };

//modify a post
exports.updatePost = (req, res) => {
  Post.update(req, (error, results) =>{
    if (error) { res.status(400).json({error}) }
    if (results) { res.status(200).json({message: 'Post updated successfully'}) }
  })
};

// delete a post
exports.deletePost = (req, res) => {
  Post.delete(req, (error, results) =>{
    if (error) { res.status(400).json({error}) }
    if (results) { res.status(200).json({mesage : 'Post deleted !'})}
  })
};

//All posts
exports.getAllPosts = (req, res) => {
  Post.getAll((error, results) =>{
    if (error) { res.status(400).json({error}) }
    if (results) {res.end(JSON.stringify(results));}
  })
};

//--Comments--

// find comments for said post 
exports.getCommentsForPost = (req, res) => {
  Comment.getAllForPost(req, (error, results) =>{
    if (error) { res.status(400).json({error}) }
    if (results) {res.end(JSON.stringify(results));}
  });
}

//create a comment 
exports.createComment = (req, res) => {
  Comment.insert(req, (error, results) =>{
    if (error) { res.status(400).json({error}) }
    if (results) { res.status(201).json({message: 'Comment created!'}) }
  })
 };

 //delete a comment
 exports.deleteComment = (req, res) => {
  Comment.delete(req, (error, results) =>{
    if (error) { res.status(400).json({error}) }
    if (results) { res.status(200).json({mesage : 'Comment deleted !'})}
  })
};
