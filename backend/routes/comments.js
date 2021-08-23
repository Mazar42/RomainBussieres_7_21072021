const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postCtrl = require('../controllers/posts');

router.post('/', auth, postCtrl.createComment);
router.delete('/:id/destroy', auth, postCtrl.deleteComment);


module.exports = router
