const router = require('express').Router();

const Users = require('../models/users-model');

// GET ALL USERS
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      console.log(users);
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get users.' });
    });
});

// GET USERS BY ID
router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findUser(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the user'
    });
  }
});

module.exports = router;
