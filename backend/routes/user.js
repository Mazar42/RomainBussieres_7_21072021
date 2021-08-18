const express = require('express');
const router = express.Router();
const connection = require('../connection');

const userCtrl = require('../controllers/user');

// user access
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// handle user profile
router.get('/profile/:id', userCtrl.getProfile);
router.put('/update', userCtrl.updateProfile);
router.delete('/destroy', userCtrl.deleteProfile);

module.exports = router;