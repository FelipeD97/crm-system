const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    cors = require("cors"),
    session = require("express-session"),
    fileStore = require("session-file-store")(session);
    

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
 salesRouter = require('./routes/sales'),
 cardRouter = require('./routes/cards'),
 taskRouter = require('./routes/taskroute');



 require('dotenv').config();

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use(
    session({
        store: fileStore(session),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        is_logged_in: false,
    })
);

app.use('/', indexRouter);
app.use('/employee', employeeRouter);
app.use('/member', memberRouter);
app.use('/inventory', inventoryRouter);
app.use('/tasks', taskRouter);



app.use('/sales', salesRouter);
app.use('/cards', cardRouter);

module.exports = app;
