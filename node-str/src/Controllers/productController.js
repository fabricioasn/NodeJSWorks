'use strict'

//post method router on controller
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

//put method router on controller
exports.put = (req, res, next) => {
    //id value for request parameter
    const id = req.params.id;
    res.status(200).send({
        id: id, 
        item: req.body
    });
};

//delete method router on controller 
exports.delete = (req,res,next) => {
    res.status(200).send(req.body);
};