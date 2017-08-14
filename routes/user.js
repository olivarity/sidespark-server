const express = require('express');
const db = require('../utils/db');
const UserModel = require('../models/user');

const router = express.Router();

// GET currently logged in User
router.get('/me', function (req, res next) {
  const id = req.user.id;
  if(id) {
    UserModel.findById(id, function (err, doc) {
      if(err) res.sendStatus(500);
      res.json(doc);
    });
  } else {
    res.sendStatus(403);
  }
});


// GET User by ID (public)


module.exports = router;
