const router = require('express').Router();
const User = require('../../models/user');

// GET currently logged in User
router.get('/me', function (req, res) {
  const user  = req.user;
  if(user) {
    User.findById(user.id, function (err, user) {
      if(err) res.sendStatus(500);
      res.json(user);
    });
  } else {
    res.sendStatus(403);
  }
});

// GET User by ID (public)
router.get('/:id', function (req, res) {
  User.findById(req.params.id, 'name avatar', function(err, user) {
    if(err) res.sendStatus(500);
    res.json(user);
  });
});

module.exports = router;
