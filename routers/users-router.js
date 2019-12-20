const router = require('express').Router();

const Users = require('../models/users-model');


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
    console.log(users)        
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get users.'})
    })
})

module.exports = router