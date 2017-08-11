//Import modules
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const SlackStrategy = require('passport-slack').Strategy;
const passport = require('passport');

//Configure middleware:
const config = require('./config.json');

mongoose.connect(config.server.database);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

passport.use(new SlackStrategy({
    clientID: config.slack.key,
    clientSecret: config.slack.secret,
    scope: ['identity.basic', 'identity.email', 'identity.avatar'],
    callbackURL: 'http://localhost:5000/connect/slack/callback'
  }, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//Add middleware to app:
const app = express();
app.use(morgan('tiny'));

app.use(session({secret:'very secret', resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(passport.initialize());
app.use(passport.session());

//Declare endpoints
app.get('/connect/slack', passport.authenticate('slack'));

app.get('/connect/slack/callback',
  passport.authenticate('slack', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/success') // Successful authentication, redirect home.
);

app.get('/success', (req, res) => {
  console.log('Name: ' + req.user.displayName);
  res.end();
});

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//Run app
const port = process.env.port || 5000;
app.listen(port);
console.log(`Listening on ${port}`);
