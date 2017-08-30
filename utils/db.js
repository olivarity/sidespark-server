const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = global.Promise;
const db = mongoose.connect(config.get('server.database'), { useMongoClient: true },
  function(err) {
    err
    ? console.log('Unable to connect to MongoDB. Error: ', err)
    : console.log('Connected successfully to MongoDB');
  }
);

module.exports  = db;
