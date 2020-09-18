'use strict'

//node app routes definition
const express = require('express');

const application = express();

const router = express.Router();

const route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.2"
    });
});
application.use('/', route);

module.exports = application;