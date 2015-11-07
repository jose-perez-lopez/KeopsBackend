'use strict';

const setPyramidSatus = require("./set_pyramid_status.js")

module.exports = (req, res, next) => {
    setPyramidSatus(req.params.pyramidId,req.body,(status)=>{
        if(status=="OK") {
            res.send(200);
        }
        return next();
    } )
};