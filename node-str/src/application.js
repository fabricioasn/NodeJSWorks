'use strict'

//node app routes definition
const express = require('express');
const bodyParser = require('body-parser');
const application = express();
const router = express.Router();

//using bodyParser
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extend: false}));

//get method router
const route = router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.2"
    });
});

//post method router
const create = route.post('/',(req,res,next) => {
    res.status(201).send(req.body);
});

//put method router
const put = route.put('/:id',(req,res,next) => {
    //id value for request parameter
    const id = req.params.id;
    res.status(200).send({
        id: id, 
        item: req.body
    });
});

//delete method router
const deletion = route.delete('/',(req,res,next) => {
    res.status(200).send(req.body);
});

application.use('/', route);
application.use('/products', create);
application.use('/products', put);
application.use('/products', deletion);

module.exports = application;