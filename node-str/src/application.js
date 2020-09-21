'use strict'

//node app routes definition
const express = require('express');
const bodyParser = require('body-parser');
const application = express();
const router = express.Router();

//routes file import
const indexRouter = require('./Routes/indexRouter');
const productRouter = require('./Routes/productRouter');

//using bodyParser
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extend: false}));

/*get method router (substituted by the indexRoutes import)
const route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.2"
    });
});*/

application.use('/', indexRouter);
application.use('/', productRouter);

/* using already imported from productRouter
application.use('/products', create);
application.use('/products', put);
application.use('/products', deletion);*/

module.exports = application;