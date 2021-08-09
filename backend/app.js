const express = require('express');
const path = require('path');
const cors =require('cors');
const helmet = require('helmet');
require('dotenv').config();
const connection = require('./connection');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

// connection.execute(`INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`, ['romain', 'bussieres', 'romain.bussieres@live.fr', 'P@sser123'])

//logic to avoid getting stuck by CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/media', express.static(path.join(__dirname, 'media')))

app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);


// use cors package to avoid cors issues
app.options('*', cors());

module.exports = app;