// require("dotenv").config()

const jwt = require('jsonwebtoken');

const secrets =  require('../config/secrets.js');
// const secrets = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: 'Invalid Credentials', error });
      } else {        
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'Token required!' });
  }

  // if (token) {
  //   next();
  // } else if (token) {
  //   jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
  //     if (err) {
  //       res.status(401).json({ message: "bad token" });
  //     } else {
  //       req.decodedJwt = decodedJwt;
  //       next();
  //     }
  //   });
  // } else {
  //   res.status(401).json({ message: "access denied" });
  // }

};
