//Import modules
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const db = require('./utils/db');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

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

require('./utils/auth')(passport);
app.use(passport.initialize());
app.use(passport.session());

//Declare endpoints
app.use('/connect', require('./routes/connect')(passport));
app.use('/api', require('./routes/api'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

//Run app
const port = process.env.port || 5000;
app.listen(port);
console.log(`Listening on ${port}`);
