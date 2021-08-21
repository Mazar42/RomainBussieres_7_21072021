const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/posts');

// all routes for users posts
// router.get('/wall', auth, postCtrl.getAllPosts);
router.get('/wall', postCtrl.getAllPosts); // --sql ok--
// router.post('/', auth, multer, postCtrl.createPost); // --sql ok--
router.post('/', multer, postCtrl.createPost); // --sql ok--
// router.put('/:id/update', auth, multer, postCtrl.updatePost);
router.put('/:id/update', multer, postCtrl.updatePost); //--sql ok--
// router.delete('/:id/destroy', auth, postCtrl.deletePost);
router.delete('/:id/destroy', postCtrl.deletePost);

// comments
// router.get('/:id/comments', auth, postCtrl.getCommentsForPost);
router.get('/:id/comments', postCtrl.getCommentsForPost); //--sql ok--
// router.post('/:id/comments', auth, postCtrl.createComment);
router.post('/:id/comments', postCtrl.createComment);
router.delete('/:id/comments/destroy', postCtrl.deleteComment);
// router.delete('/:id/comments/destroy', auth, postCtrl.deleteComment);



module.exports = router;