const mongoose = require('mongoose');
const config = require('./config.json');
mongoose.Promise = global.Promise;
const db = mongoose.connect(config.server.database, { useMongoClient: true },
  function(err) {
    err
    ? console.log('Unable to connect to MongoDB. Error: ', err)
    : console.log('Connected successfully to MongoDB');
  }
);

module.exports  = db;
