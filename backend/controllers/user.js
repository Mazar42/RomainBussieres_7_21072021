const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passwordValidator = require('password-validator');
require('dotenv').config();

// user access

exports.signup = (req, res, next) => {
  // Create a schema
  var schema = new passwordValidator();

  // Add properties to it
  schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
  if (schema.validate(req.body.password) == false) {
    return res.status(400).json({ message: 'password not valid' });
  }
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: Buffer.from(req.body.email).toString('base64'),
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Created new user !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({email: Buffer.from(req.body.email).toString('base64')})
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Couldn\'t find user !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Wrong password !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.TOKEN,
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// handle user profile

exports.getUser = (req, res, next) => {
  User.findOne({_id: res.params.id})
  .then(() => res.status(200).json({message: 'Profile acquired'}))
  .catch(error => res.status(400).json({error}));
}

exports.deleteProfile = (req, res, next) => {
  User.deleteOne({_id: req.params.id})
      .then(() => res.status(200).json({message: 'Profile deleted'}))
      .catch(error => res.status(400).json({error}));
    };

exports.updateProfile = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { ...usertObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Updated profile!' }))
    .catch(error => res.status(400).json({ error }));
};