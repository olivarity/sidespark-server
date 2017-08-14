const config = require('./config.json');
const SlackStrategy = require('passport-slack').Strategy;

module.exports = function(passport, UserModel) {

  passport.use(new SlackStrategy({
      clientID: config.slack.key,
      clientSecret: config.slack.secret,
      scope: config.slack.scope,
      callbackURL: config.server.protocol + '://' + config.server.host + config.slack.callback
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
      UserModel.findByIdAndUpdate(id, update, {upsert: true}, function (err, doc) {
        done(null, doc);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    //Save user's id to session store
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function (err, doc) {
        done(null, doc);
    })
  });


}
