const router = require('express').Router();

const Jokes = require('../models/jokes-model.js');

const authenticate = require('../middleware/authenticate-middleware.js');

router.post('/add', (req, res) => {
  const joke = req.body;

  Jokes.addJoke(joke)
    .then(newJoke => {
        console.log(newJoke)
      res.status(201).json(newJoke);
    })
    .catch(err => {
      res.status(500).json({
        message: 'There was an error adding joke and punchline.'
      });
    });
});

router.get('/', (req, res) => {
    Jokes.findJokes()
    .then(jokes => {
        res.status(200).json(jokes);
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get jokes.'})
    })
});

module.exports = router;
