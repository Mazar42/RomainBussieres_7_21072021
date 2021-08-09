const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// user access
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// handle user profile
router.get('/profile', userCtrl.getUser);
router.put('/update', userCtrl.updateProfile);
router.delete('/destroy', userCtrl.deleteProfile);

module.exports = router;