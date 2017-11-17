// Dependencies

  // Express
var express = require('express');
  // Body Parser
var bodyParser = require('body-parser');
  // MongoDB via MLab
var MongoClient = require('mongodb').MongoClient;
  // Mongoose
var mongoose = require('mongoose');
  // JSON Web Tokens
var jwt = require('jsonwebtoken');
  // bcrypt
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const app = express();


// to setup mongoose to a local database
// mongoose.connect('mongodb://localhost/test');

// Link to MongoDB via MLab
// Need to create throw away email / mlab account
MongoClient.connect('<LINK TO MLAB GOES HERE>', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});
