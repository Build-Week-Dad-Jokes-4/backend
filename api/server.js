const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Routers & local middleware
const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');


const server = express();

server.use(helmet());
server.use(morgan("dev"))
server.use(cors());
server.use(express.json());

// base endpoints
server.use('/api/auth', authRouter);
// server.use('/api/jokes', authenticate, jokesRouter);

server.get('/', (req, res) => {
    res.status(200).json('Server is live!');
})

module.exports =server



