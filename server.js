const express = require('express');
const server = express();
const JokesRouter = require('./api/jokes/jokes-router');



server.use(express.json());
server.use('/jokes', JokesRouter);

// //catchall
// server.use('*', (req, res) => {
//     res.json({api:'up'})
// })

module.exports = server;