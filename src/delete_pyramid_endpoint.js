'use strict';

const deletePyramid = require("./delete_pyramid.js")

module.exports = (req, res, next) => {
    deletePyramid(req.params.pyramidId,(reply)=>{
        res.send(200);
        return next();
    } )
};