const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Routers & middleware


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use()

server.get('/', (req, res) => {
    res.status(200).json('Server is live!');
})


module.exports =server



