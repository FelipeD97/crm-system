const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    cors = require("cors");

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
    };

const indexRouter = require('./routes/index'),
 employeeRouter = require('./routes/employee'),
 memberRouter = require('./routes/member'),
 inventoryRouter = require('./routes/inventory'),


 salesRouter = require('./routes/sales');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/member', memberRouter);
app.use('/inventory', inventoryRouter);


app.use('/sales', salesRouter);

module.exports = app;
