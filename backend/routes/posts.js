const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/posts');

// all routes for users posts

router.get('/wall', auth, postCtrl.getAllPosts);
router.post('/', auth, multer, postCtrl.createPost);
router.put('/:id/update', auth, multer, postCtrl.updatePost);
router.delete('/:id/destroy', auth, postCtrl.deletePost);
// comments
router.get('/:id/comments', auth, postCtrl.getOnePost);
router.post('/:id/comments', auth, postCtrl.createComment);
router.delete('/:id/comments/destroy', auth, postCtrl.deleteComment);



module.exports = router;