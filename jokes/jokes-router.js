const router = require('express').Router();

const authenticate = require('../auth/authenticate-middleware.js');


router.get('/', authenticate, (req, res) => {

})

module.exports = router;