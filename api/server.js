const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Routers 
const authRouter = require('../routers/auth-router.js');
const jokesRouter = require('../routers/jokes-router.js');

const server = express();

// middleware
server.use(helmet());
server.use(morgan("dev"))
server.use(cors());
server.use(express.json());

// base endpoints
server.use('/api/auth', authRouter);
server.use('/api/jokes', jokesRouter);

server.get('/', (req, res) => {
    res.send('Server is live!');
})

module.exports = server



