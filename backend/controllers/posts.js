const Post = require('../models/Post');
const fs = require ('fs')

// create new post
exports.createPost = (req, res, next) => {
    const PostObject = JSON.parse(req.body.post);
    delete PostObject._id;
    const post = new Post({
      ...postObject,
      imageUrl : `${req.protocol}://${req.get('host')}/media/${req.file.filename}`
    });
    post.save()
      .then(() => res.status(201).json({message: 'Post created'}))
      .catch(error => res.status(400).json({error}));
  };