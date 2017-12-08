const express = require ('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config.js');
const mongoose = require('mongoose');
const passport = require('passport');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoUrl, {
  useMongoClient: true
});

require('./routes/routes')(app);

app.listen(config.port, function() {
  console.log(`Iris app server listening on port ${config.port}...`)
});



