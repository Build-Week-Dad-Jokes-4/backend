const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const Users = require('./auth-model.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    
    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.post('login', (req, res) => {
    let {username, password} = req.body;
    
    Users.findBy({})
})

module.exports = router;