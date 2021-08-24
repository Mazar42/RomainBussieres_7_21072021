const jwt = require('jsonwebtoken');
require('dotenv').config();

function getUserId(req) {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    return decodedToken.userId;
}

module.exports = getUserId;