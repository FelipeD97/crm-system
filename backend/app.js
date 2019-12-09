const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

const indexRouter = require('./routes/index'),
 employeeRouter = require('./routes/employee'),
 memberRouter = require('./routes/member')
 salesRouter = require('./routes/sales');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/member', memberRouter);
app.use('/sales', salesRouter);

module.exports = app;
