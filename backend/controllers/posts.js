const Post = require('../models/Post');
const fs = require ('fs');

// -- posts --

// create new post
exports.createPost = (req, res, next) => {
   Post.insert(req.body.user_id, req.body.title)
    post.save()
      .then(() => res.status(201).json({message: 'Post created'}))
      .catch(error => res.status(400).json({error}));
  };

// find a post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id})
  .then(post => res.status(200).json(post))
  .catch(error => res.status(404).json({error}));
};

//modify a post
exports.updatePost = (req, res, next) => {
  const postObject = req.file ?
  {
    ...JSON.parse(req.body.post),
    imageUrl : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : {...req.body};
  Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Updated Post!'}))
    .catch(error => res.status(400).json({error}));
};

// delete a post
exports.deletePost = (req, res, next) => {
  Post.findOne({_id: req.params.id})
  .then(thing => {
    const filename = thing.imageUrl.split('/media/')[1];
    fs.unlink(`media/${filename}`, () => {
      Post.deleteOne({_id: req.params.id})
      .then(() => res.status(200).json({message: 'Deleted!'}))
      .catch(error => res.status(400).json({error}));
    });
  })
  .catch(error=> res.status(500).json({error}));
};

//All posts
exports.getAllPosts = (req, res, next) => {
  Post.find()
  .then(posts => res.status(200).json(posts))
  .catch(error => res.status(400).json({error: error}));
};

//--Comments--

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