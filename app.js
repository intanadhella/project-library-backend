var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//import mongoose
const mongoose = require('mongoose')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//add library router
var libraryRouter = require('./routes/library')

var app = express();
//connect to mongodb
mongodConnect = process.env.MONGOURI
mongoose.connect(mongodConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//export library router to its URI
app.use('/library', libraryRouter)

module.exports = app;
