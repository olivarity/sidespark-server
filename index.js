const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');

const Grant = require('grant-express')
  , grant = new Grant(require('./config.json'));

const app = express();

app.use(morgan('combined'));
app.use(session({secret:'very secret', resave: false, saveUninitialized: false}));
app.use(grant);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/slack/auth', (req, res) => {
  res.end(JSON.stringify(req.query, null, 2));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.port || 5000;
app.listen(port);

console.log(`Listening on ${port}`);
