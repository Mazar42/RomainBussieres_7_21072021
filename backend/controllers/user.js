const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passwordValidator = require('password-validator');
require('dotenv').config();

//this is a work in progress, valid logics are commented --ok--
// user access

exports.signup = (req, res, next) => {
    // Create a schema
    var schema = new passwordValidator();

    // Add properties to it
    schema
        .is().min(8) // Minimum length 8
        .is().max(100) // Maximum length 100
        .has().uppercase() // Must have uppercase letters
        .has().lowercase() // Must have lowercase letters
        .has().digits(2) // Must have at least 2 digits
        .has().not().spaces() // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

    if (schema.validate(req.body.password) == false) {
        return res.status(400).json({ message: 'password not valid' });
    }

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            try {
                User.insert(req.body.firstname, req.body.lastname, Buffer.from(req.body.email).toString('base64'), hash, function(error, result, fields) {
                    if (result === undefined) return res.status(400).json({ error: 'User already exists' })
                    return res.status(201).json({ message: 'New user created successfully! 🥳' })
                });
            } catch (error) { return res.status(400).json({ error }) }
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res, next) => {
    User.findOne(Buffer.from(req.body.email).toString('base64'), function(error, result, fields) {
        if (error) {
            return console.log(error);
        }
        if (result.length === 0) {
            return res.status(401).json({ error: 'User not found!' });
        }
        bcrypt.compare(req.body.password, result[0].password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: 'Wrong password!' });
                }
                res.status(200).json({
                    userId: result[0].id,
                    token: jwt.sign({ userId: result[0].id },
                        process.env.TOKEN, { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error }))
    })
};

// handle user profile

//get one profile according to id           --ok--
exports.getProfile = (req, res) => {
    User.getOne(req, (error, results) => {
        if (error) { res.status(400).json({ error }) }
        if (results) { res.end(JSON.stringify(results)); }
    })
};

// delete profile
exports.deleteProfile = (req, res) => {
    User.delete(req, (error, results) => {
        if (error) { res.status(400).json({ error }) }
        if (results) { res.status(200).json({ mesage: 'Profile deleted !' }) }
    })
};

//update profile
exports.updateProfile = (req, res, next) => {
    User.modify(req, (error, results) => {
        if (error) { res.status(400).json({ error }) }
        if (results) { res.status(200).json({ message: 'Profile updated!' }) }
    })
};