const router = require('express').Router();

const authenticate = require('../middleware/authenticate-middleware.js');


router.get('/', authenticate, (req, res) => {

})

module.exports = router;