const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userCtrl = require('../controllers/user');

// user access
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// handle user profile
router.get('/profile/:id', auth, userCtrl.getProfile);
router.put('/update', auth, userCtrl.updateProfile);
router.delete('/destroy', auth, userCtrl.deleteProfile);

module.exports = router;