//Import modules
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const SlackStrategy = require('passport-slack').Strategy;
const passport = require('passport');

//Configure middleware:
const config = require('./config.json');

const UserModel = require('./models/user');
const db = mongoose.connect(config.server.database, { useMongoClient: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

passport.use(new SlackStrategy({
    clientID: config.slack.key,
    clientSecret: config.slack.secret,
    scope: ['identity.basic', 'identity.email', 'identity.avatar'],
    callbackURL: 'http://localhost:5000/connect/slack/callback'
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

//Add middleware to app:
const app = express();
app.use(morgan('tiny'));

app.use(session({
  secret:'very secret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: db })
}));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(passport.initialize());
app.use(passport.session());

//Declare endpoints
app.get('/connect/slack', passport.authenticate('slack'));

app.get('/connect/slack/callback',
  passport.authenticate('slack', { failureRedirect: '/' }),
  (req, res) => res.redirect('/') // Successful authentication, redirect home.
);

app.get('/logout', function(req, res){
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
});

app.get('/api/user/me', function (req, res) { //Currently logged in user info
  if (req.user) { res.json(req.user) }
  else { res.json(null) }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//Run app
const port = process.env.port || 5000;
app.listen(port);
console.log(`Listening on ${port}`);
