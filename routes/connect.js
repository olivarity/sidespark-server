const router = require('express').Router();

module.exports = function (passport) {
  router.get('/slack', passport.authenticate('slack'));
  router.get('/slack/callback',
    passport.authenticate('slack', { failureRedirect: '/' }),
    (req, res) => res.redirect('/') // Successful authentication, redirect home.
  );
  router.get('/logout', function(req, res){
    req.session.destroy(function (err) {
      res.redirect('../');
    });
  });

  return router;
}
