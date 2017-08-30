const config = require('config');
const SlackStrategy = require('./strategy');
const User = require('../models/user');

module.exports = function(passport) {

  passport.use(new SlackStrategy({
      clientID: config.get('slack.key'),
      clientSecret: config.get('slack.secret'),
//    team: config.slack.team,
      scope: config.get('slack.scope'),
      callbackURL:
        config.get('server.protocol') +
        '://' +
        config.get('server.host') +
        config.get('slack.callback'),
    }, (accessToken, refreshToken, profile, done) => {
      const id = profile.id
      const update = {
        _id: id,
        authToken: accessToken,
        email: profile.user.email,
        name: profile.user.name,
        avatar: { // Has to be a better way to do this...
          image_24: profile.user.image_24,
          image_32: profile.user.image_32,
          image_48: profile.user.image_48,
          image_72: profile.user.image_72,
          image_192: profile.user.image_192,
          image_512: profile.user.image_512
        }
      }
      User.findByIdAndUpdate(id, update, {upsert: true}, function (err, doc) {
        console.log(doc);
        if(doc) return done(null, doc);
        User.findById(id, function (err, user) {
          done(null, user);
        });
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    console.log('Serializing');
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    console.log("Deserializing");
    User.findById(id, function (err, doc) {
        done(null, doc);
    })
  });


}
