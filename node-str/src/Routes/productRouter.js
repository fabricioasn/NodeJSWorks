'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../Controllers/productController');

/*get method router (already defined at indexRouter)
router.get('/',(req,res,next) =>{
    res.status(200).send({
        title:"Node Store API",
        version: "0.0.2"
    });
}); */

//post method router
router.post('/', controller.post);

//put method router
router.put('/:id', controller.put);

//delete method router
router.delete('/', controller.delete);

module.exports = router;