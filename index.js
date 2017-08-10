const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/test', (req, res) => {

  const test = {
    type: 'test',
    id: 1
  };

  res.json(test);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.port || 5000;
app.listen(port);

console.log(`Listening on ${port}`);
