const router = require('express').Router();

const Jokes = require('../models/jokes-model.js');

const authenticate = require('../middleware/authenticate-middleware.js');

// POST JOKES
router.post('/add', (req, res) => {
  const joke = (req.body);
  console.log("TCL: joke", joke)
  Jokes.addJoke(joke)
    .then(newJoke => {
    //   console.log(newJoke);
      res.status(201).json(newJoke);
    })
    .catch(err => {
      
      res.status(500).json({
        message: 'There was an error adding joke and punchline.'
      });
    });
});

// router.post('/add', async (req, res) => {
//     try {
//         const joke = await Jokes.addJoke(req.body)
//          res.status(200).json(joke);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: 'There was an error adding joke and punchline.'
//         })
//     }
// })

// GET ALL JOKES
router.get('/', (req, res) => {
  Jokes.findJokes()
    .then(jokes => {
      res.status(200).json(jokes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get jokes.' });
    });
});

// GET JOKE BY ID
router.get('/:id', async (req, res) => {
  try {
    const joke = await Jokes.findJokeById(req.params.id);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ message: 'Joke not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the joke'
    });
  }
});

// UPDATE JOKE BY ID
router.put('/update/:id', async (req, res) => {
  try {
    const joke = await Jokes.updateJoke(req.params.id, req.body);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ message: 'The joke could not be found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error updating joke.'
    });
  }
});

// DELETE JOKE BY ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const count = await Jokes.removeJoke(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The joke has been deleted.' });
    } else {
      res.status(404).json({ message: `Could not find joke with given ${id}` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was an error removing the joke.'
    });
  }
});

module.exports = router;
