// Runs a simple Express server that serves static files for local development.
//
// @see https://expressjs.com/

'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(5000);
