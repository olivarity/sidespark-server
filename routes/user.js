const express = require('express');
const db = require('../utils/db');
const UserModel = require('../models/user');

const router = express.Router();

// GET currently logged in User
router.get('/me', function (req, res) {
  const user  = req.user;
  if(user) {
    UserModel.findById(user.id, function (err, user) {
      if(err) res.sendStatus(500);
      res.json(user);
    });
  } else {
    res.sendStatus(403);
  }
});

// GET User by ID (public)
router.get('/:id', function (req, res) {
  UserModel.findById(req.params.id, 'name avatar', function(err, user) {
    if(err) res.sendStatus(500);
    res.json(user);
  });
});

module.exports = router;
