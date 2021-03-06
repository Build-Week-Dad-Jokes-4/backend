const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../models/auth-model.js');

const secrets = require('../config/secrets.js');
// const secrets = process.env.JWT_SECRET;


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    console.log("TCL: hash", hash)
    
    user.password = hash;
    console.log("TCL: hash", hash)
    
    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
          console.log(error)
            res.status(500).json(error);
        })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = getJwtToken(user);
    
            res.status(200).json({
              id: user.id,
              // message: `Welcome ${user.username}, have a token.`,
              username: username,
              token
            });
          } else {
            res.status(401).json({ message: 'Invalid Credentials' });
          }
    })
    .catch(error => {
      console.log(error)
        res.status(500).json(error);
      });
})

function getJwtToken(user) {
    const payload = {
      subject: user.id,
      username: user.username, 
    };
  
    const options = {
      expiresIn: '1d'
    };
  
      return jwt.sign(payload, secrets.jwtSecret, options)
  }

module.exports = router;